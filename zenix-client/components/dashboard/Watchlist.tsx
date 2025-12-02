'use client';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusIcon } from "lucide-react";

interface WatchlistItem {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
}

const watchlistData: WatchlistItem[] = [
  {
    symbol: 'EUR/USD',
    name: 'Euro / US Dollar',
    price: '1.0855',
    change: '+0.15%',
    changePercent: '+0.15%',
    isPositive: true,
  },
  {
    symbol: 'GBP/JPY',
    name: 'Pound / Jap. Yen',
    price: '201.21',
    change: '-0.05%',
    changePercent: '-0.05%',
    isPositive: false,
  },
  {
    symbol: 'AUD/CAD',
    name: 'Aussie / Canadian D.',
    price: '0.9087',
    change: '+0.32%',
    changePercent: '+0.32%',
    isPositive: true,
  },
  {
    symbol: 'USD/CHF',
    name: 'US Dollar / Swiss F.',
    price: '0.9112',
    change: '-0.11%',
    changePercent: '-0.11%',
    isPositive: false,
  },
  {
    symbol: 'XAU/USD',
    name: 'Gold / US Dollar',
    price: '2345.67',
    change: '+1.20%',
    changePercent: '+1.20%',
    isPositive: true,
  },
];

export const Watchlist = () => {
  return (
    <aside className="w-72 shrink-0 bg-[#101622] border-r border-[#181f2d] p-4 flex flex-col">
      <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-2 pb-4">
        Watchlist
      </h3>
      <div className="relative w-full mb-2">
        <Input type="text" placeholder="Search" className="w-full pr-10" />
        <button className="absolute inset-y-0 right-2 flex items-center justify-center text-gray-400 hover:text-white" aria-label="Add">
          <PlusIcon className="w-5 h-5" />
        </button>
      </div>
      <Select>
        <SelectTrigger className="w-full mb-2">
          <SelectValue placeholder="Select a currency" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="major-pair">Major Pair</SelectItem>
            <SelectItem value="minor-pair">Minor Pair</SelectItem>
            <SelectItem value="comodity">Comodity</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex-1 overflow-y-auto space-y-1">
        {watchlistData.map((item, index) => (
          <div
            key={item.symbol}
            className={`p-3 rounded-lg ${index === 0 ? 'bg-[#181f2d]/80' : 'hover:bg-[#181f2d]/50'} flex items-center justify-between transition-colors`}
          >
            <div className="flex flex-col">
              <span className="font-bold text-sm">{item.symbol}</span>
              <span className="text-gray-400 text-xs">{item.name}</span>
            </div>
            <div className="w-16 h-8">
              <svg
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 100 40"
                width="100%"
              >
                <path
                  d={
                    item.isPositive
                      ? 'M 0 20 L 10 25 L 20 15 L 30 22 L 40 18 L 50 30 L 60 25 L 70 15 L 80 10 L 90 20 L 100 18'
                      : 'M 0 18 L 10 15 L 20 25 L 30 20 L 40 22 L 50 10 L 60 15 L 70 25 L 80 30 L 90 20 L 100 22'
                  }
                  fill="none"
                  stroke={item.isPositive ? '#39FF14' : '#FF1744'}
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-mono font-medium text-sm">{item.price}</span>
              <span
                className={`text-xs ${item.isPositive ? 'text-[#39FF14]' : 'text-[#FF1744]'}`}
              >
                {item.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

