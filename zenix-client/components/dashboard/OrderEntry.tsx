'use client';

import { useState } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { PlusIcon } from 'lucide-react';

export const OrderEntry = () => {
  const [orderType, setOrderType] = useState('market-order');
  const [lotSize, setLotSize] = useState('1.00');
  const [leverage, setLeverage] = useState(50);
  const [symbol, setSymbol] = useState("EUR/USD");
  const [targetPosition, setTargetPosition] = useState<string | null>(null);
  const [limitPrice, setLimitPrice] = useState('');
  const [stopPrice, setStopPrice] = useState('');
  return (
    <aside className="w-80 shrink-0 bg-[#101622] border-l border-[#181f2d] p-4 flex flex-col gap-4">
      <h3 className="text-white font-bold leading-tight tracking-[-0.015em]">
        Order Entry: {symbol}
      </h3>
      <div className="flex flex-col gap-4">
        <div>
          <Label htmlFor="order-type" className='text-white text-sm font-medium leading-none tracking-[-0.015em] mb-2'>Order Type</Label>
          <Select value={orderType} onValueChange={setOrderType}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Order Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="market-order">Market Order</SelectItem>
                <SelectItem value="limit-order">Limit Order</SelectItem>
                <SelectItem value="stop-order">Stop Order</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Limit Price Input - hanya muncul untuk Limit Order */}
        {orderType === 'limit-order' && (
          <div>
            <Label htmlFor="limit-price" className='text-white text-sm font-medium leading-none tracking-[-0.015em] mb-2'>
              Limit Price
            </Label>
            <Input
              id="limit-price"
              placeholder="Enter Limit Price"
              required
              type="number"
              value={limitPrice}
              onChange={(e) => setLimitPrice(e.target.value)}
              className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
            />
            <p className="text-xs text-gray-400 mt-1">
              Order will execute at this price or better
            </p>
          </div>
        )}

        {/* Stop Price Input - hanya muncul untuk Stop Order */}
        {orderType === 'stop-order' && (
          <div>
            <Label htmlFor="stop-price" className='text-white text-sm font-medium leading-none tracking-[-0.015em] mb-2'>
              Stop Price
            </Label>
            <Input
              id="stop-price"
              placeholder="Enter Stop Price"
              required
              type="number"
              value={stopPrice}
              onChange={(e) => setStopPrice(e.target.value)}
              className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
            />
            <p className="text-xs text-gray-400 mt-1">
              Order will execute when price reaches this level
            </p>
          </div>
        )}

        <div>
          <Label htmlFor="lot-size" className='text-white text-sm font-medium leading-none tracking-[-0.015em] mb-2'>Lot Size</Label>
          <Input
            id="lot-size"
            placeholder="Lot Size"
            required
            type="number"
            value={lotSize}
            onChange={(e) => setLotSize(e.target.value)}
            className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
          />
        </div>
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-2 pb-4">
          Take Profit or Stop Loss
        </h3>
        <Button onClick={() => setTargetPosition('take-profit')}>
          <PlusIcon className="w-5 h-5" />
          Add Take Profit or Stop Loss
        </Button>
        {targetPosition ? (
          targetPosition === 'take-profit' ? (
            <div className="relative w-full mb-2">
              <Input type="text" placeholder="Take Profit" className="w-full pr-10" />
            </div>
          ) : targetPosition === 'stop-loss' ? (
            <div className="relative w-full mb-2">
              <Input type="text" placeholder="Stop Loss" className="w-full pr-10" />
            </div>
          ) : null
        ) : null}
        <div className="grid grid-cols-2 gap-3">
          <Button className="w-full py-3 rounded-lg bg-[#39FF14] text-black font-bold text-lg">
            BUY
          </Button>
          <Button className="w-full py-3 rounded-lg bg-[#FF1744] text-white font-bold text-lg">
            SELL
          </Button>
        </div>
      </div>
    </aside>
  );
};

