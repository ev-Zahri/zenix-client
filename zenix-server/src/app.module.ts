import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MarketGateway } from './market/market.gateway';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [PrismaModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService, MarketGateway],
})
export class AppModule {}
