import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateOrderDto, userId?: string) {
    // TODO: Get userId from authenticated user (JWT/session)
    const orderUserId = userId || 'temp-user-id';
    return await this.createOrder(orderUserId, dto);
  }

  async createOrder(userId: string, dto: CreateOrderDto) {
    return await this.prisma.$transaction(async (tx) => {
      // 1. Ambil Wallet User
      const wallet = await tx.wallet.findUnique({ where: { userId } });
      if (!wallet) throw new BadRequestException('Wallet not found');

      // 2. Hitung Margin yang dibutuhkan (Logika sederhana)
      // Misal: Harga * Volume (Di real app pakai Leverage)
      const requiredMargin = Number(dto.price) * Number(dto.volume);

      if (Number(wallet.balance) < requiredMargin) {
        throw new BadRequestException('Insufficient balance');
      }

      // 3. Kurangi Saldo (Simulasi spread/fee atau margin lock)

      // 4. Buat Order
      const newOrder = await tx.order.create({
        data: {
          userId,
          symbol: dto.symbol,
          type: dto.type, // 'BUY' or 'SELL'
          volume: dto.volume,
          openPrice: dto.price,
          status: 'OPEN',
        },
      });

      return newOrder;
    });
  }

  async findAll() {
    return await this.prisma.order.findMany({
      include: {
        user: {
          select: {
            id: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const order = await this.prisma.order.findUnique({
      where: { id: id.toString() },
      include: {
        user: {
          select: {
            id: true,
            email: true,
          },
        },
      },
    });

    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    return order;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const order = await this.findOne(id);

    return await this.prisma.order.update({
      where: { id: order.id },
      data: {
        ...(updateOrderDto.symbol && { symbol: updateOrderDto.symbol }),
        ...(updateOrderDto.type && { type: updateOrderDto.type }),
        ...(updateOrderDto.volume && { volume: updateOrderDto.volume }),
        ...(updateOrderDto.price && { openPrice: updateOrderDto.price }),
      },
    });
  }

  async remove(id: number) {
    const order = await this.findOne(id);

    return await this.prisma.order.update({
      where: { id: order.id },
      data: {
        status: 'CANCELLED',
      },
    });
  }
}
