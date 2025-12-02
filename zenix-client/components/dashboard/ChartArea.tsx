'use client';

import { useState } from 'react';
import { CandleChart } from '@/components/charts/CandleChart';

const timeframes = ['1m', '5m', '1H', '4H', '1D'];

export const ChartArea = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1H');

  return (
    <div className="flex-1 bg-panel-dark rounded-xl flex flex-col p-4 min-h-0">
      {/* Toolbar */}
      <div className="flex justify-between gap-2 border-b border-background-dark pb-3 mb-3">
        <div className="flex items-center gap-2">
          {timeframes.map((tf) => (
            <button
              key={tf}
              onClick={() => setSelectedTimeframe(tf)}
              className={`px-3 py-1 text-sm rounded-md ${
                selectedTimeframe === tf
                  ? 'bg-background-dark text-accent-blue font-semibold'
                  : 'text-gray-400 hover:bg-background-dark'
              }`}
            >
              {tf}
            </button>
          ))}
          <div className="w-px h-6 bg-background-dark mx-2" />
          <button className="p-2 rounded-md hover:bg-background-dark text-gray-400">
            <span className="material-symbols-outlined text-base">candlestick_chart</span>
          </button>
          <button className="p-2 rounded-md hover:bg-background-dark text-gray-400">
            <span className="material-symbols-outlined text-base">draw</span>
          </button>
        </div>
      </div>

      {/* Main Chart */}
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex flex-col grow gap-2 min-h-0">
          <div className="flex-1 flex flex-col gap-2 p-2">
            <p className="text-white text-base font-medium leading-normal">
              EUR/USD Candlestick Chart
            </p>
            <div className="flex items-baseline gap-3">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight truncate">
                1.0850
              </p>
              <div className="flex gap-2 items-center">
                <p className="text-gray-400 text-base font-normal leading-normal">
                  {selectedTimeframe}
                </p>
                <p className="text-accent-green text-base font-medium leading-normal">+0.15%</p>
              </div>
            </div>
            <div className="h-full w-full">
              <CandleChart />
            </div>
          </div>
          <div className="h-1/4 flex flex-col gap-2 p-2">
            <p className="text-white text-base font-medium leading-normal">RSI (14)</p>
            <div className="flex items-baseline gap-3">
              <p className="text-white tracking-light text-[24px] font-bold leading-tight truncate">
                55.20
              </p>
            </div>
            <div className="h-full w-full bg-center bg-no-repeat bg-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

