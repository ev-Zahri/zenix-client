'use client';

import { useState } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { MinusIcon, PlusIcon } from 'lucide-react';

export const OrderEntry = () => {
  const [orderType, setOrderType] = useState('market-order');
  const [lotSize, setLotSize] = useState('0.01');
  const [symbol, setSymbol] = useState("EUR/USD");

  const [takeProfit, setTakeProfit] = useState(false);
  const [takeProfitValue, setTakeProfitValue] = useState('');
  const [stopLoss, setStopLoss] = useState(false);
  const [stopLossValue, setStopLossValue] = useState('');
  
  const [limitPrice, setLimitPrice] = useState('');
  const [stopPrice, setStopPrice] = useState('');
  return (
    <aside className="w-80 shrink-0 bg-background-dark border-l border-panel-dark p-4 flex flex-col gap-4">
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
            placeholder="e.g. 1.00"
            required
            type="number"
            step="0.01"
            min="0.01"
            inputMode="decimal"
            pattern="^\d+(\.\d{0,2})?$"
            value={lotSize}
            onChange={(e) => {
              let v = e.target.value.replace(/[^0-9.]/g, ''); 
              const parts = v.split('.');
              if (parts.length > 2) {
                v = parts[0] + '.' + parts.slice(1).join(''); 
              }
              if (v.includes('.')) {
                const [intPart, decPart] = v.split('.');
                v = intPart + '.' + (decPart ? decPart.slice(0,2) : '');
              }
              setLotSize(v);
            }}
            className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Button onClick={() => setTakeProfit(true)} variant="outline" className="w-full cursor-pointer">
            <PlusIcon className="w-5 h-5" />
            Take Profit
          </Button>
          <Button onClick={() => setStopLoss(true)} variant="outline" className="w-full cursor-pointer">
            <PlusIcon className="w-5 h-5" />
            Stop Loss
          </Button>
        </div>
        {takeProfit && (
          <div>
            <div className="flex items-center justify-between mb-1">
              <Label htmlFor="take-profit" className='text-white text-sm font-medium leading-none tracking-[-0.015em]'>Take Profit</Label>
              <Button variant="outline" className="w-fit cursor-pointer" onClick={() => setTakeProfit(false)} >
                <MinusIcon className="w-4 h-4 cursor-pointer" onClick={() => setTakeProfitValue('')} />
              </Button>
            </div>
            <Input
              id="take-profit"
              placeholder="Enter Take Profit"
              required
              type="number"
              min="0"
              value={takeProfitValue}
              onChange={(e) => setTakeProfitValue(e.target.value)}
              className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
            />
          </div>
        )}
        {stopLoss && (
          <div>
            <div className="flex items-center justify-between mb-1">
              <Label htmlFor="stop-loss" className='text-white text-sm font-medium leading-none tracking-[-0.015em]'>Stop Loss</Label>
              <Button variant="outline" className="w-fit cursor-pointer" onClick={() => setStopLoss(false)} >
                <MinusIcon className="w-4 h-4 cursor-pointer" onClick={() => setStopLossValue('')} />
              </Button>
            </div>
            <Input
              id="stop-loss"
              placeholder="Enter Stop Loss"
              required
              type="number"
              min="0"
              value={stopLossValue}
              onChange={(e) => setStopLossValue(e.target.value)}
              className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
            />
          </div>
        )}
        <div className="grid grid-cols-2 gap-3">
          <Button className="w-full py-3 rounded-lg bg-accent-green text-black font-bold text-lg">
            BUY
          </Button>
          <Button className="w-full py-3 rounded-lg bg-accent-red text-white font-bold text-lg">
            SELL
          </Button>
        </div>
      </div>
    </aside>
  );
};

