export class CreateOrderDto {
  symbol: string;
  type: 'BUY' | 'SELL';
  volume: number;
  price: number;
}
