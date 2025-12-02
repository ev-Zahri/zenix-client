'use client';

interface Position {
  symbol: string;
  type: 'BUY' | 'SELL';
  volume: string;
  openPrice: string;
  currentPrice: string;
  pnl: string;
  isPositive: boolean;
}

const positions: Position[] = [
  {
    symbol: 'EUR/USD',
    type: 'BUY',
    volume: '5.00',
    openPrice: '1.0798',
    currentPrice: '1.0855',
    pnl: '+$28,500.00',
    isPositive: true,
  },
  {
    symbol: 'GBP/JPY',
    type: 'SELL',
    volume: '2.50',
    openPrice: '201.55',
    currentPrice: '201.21',
    pnl: '+$5,468.12',
    isPositive: true,
  },
  {
    symbol: 'XAU/USD',
    type: 'BUY',
    volume: '2.00',
    openPrice: '2325.10',
    currentPrice: '2345.67',
    pnl: '+$4,114.00',
    isPositive: true,
  },
  {
    symbol: 'AUD/CAD',
    type: 'SELL',
    volume: '10.00',
    openPrice: '0.9115',
    currentPrice: '0.9087',
    pnl: '-$318.73',
    isPositive: false,
  },
];

export const OpenPositions = () => {
  return (
    <div className="h-1/3 bg-[#181f2d] rounded-xl flex flex-col p-4 overflow-hidden">
      <div className="flex items-center justify-between pb-3 border-b border-[#101622]">
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          Open Positions
        </h3>
        <div className="flex gap-4 items-center">
          <span className="text-sm text-gray-400">
            Margin Level: <span className="font-semibold text-white">2560%</span>
          </span>
          <span className="text-sm text-gray-400">
            Floating P/L:{' '}
            <span className="font-semibold text-[#39FF14]">+$37,763.39</span>
          </span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto mt-2">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-400 uppercase sticky top-0 bg-[#181f2d]">
            <tr>
              <th className="px-4 py-3" scope="col">
                Symbol
              </th>
              <th className="px-4 py-3" scope="col">
                Type
              </th>
              <th className="px-4 py-3" scope="col">
                Volume
              </th>
              <th className="px-4 py-3" scope="col">
                Open Price
              </th>
              <th className="px-4 py-3" scope="col">
                Current Price
              </th>
              <th className="px-4 py-3" scope="col">
                P/L
              </th>
            </tr>
          </thead>
          <tbody>
            {positions.map((position, index) => (
              <tr
                key={position.symbol}
                className={`${index < positions.length - 1 ? 'border-b border-[#101622]' : ''} font-mono`}
              >
                <td className="px-4 py-3 font-semibold text-white">{position.symbol}</td>
                <td className="px-4 py-3">
                  <span
                    className={`${
                      position.type === 'BUY'
                        ? 'bg-[#39FF14]/20 text-[#39FF14]'
                        : 'bg-[#FF1744]/20 text-[#FF1744]'
                    } text-xs font-bold px-2 py-1 rounded`}
                  >
                    {position.type}
                  </span>
                </td>
                <td className="px-4 py-3">{position.volume}</td>
                <td className="px-4 py-3">{position.openPrice}</td>
                <td className="px-4 py-3">{position.currentPrice}</td>
                <td
                  className={`px-4 py-3 ${position.isPositive ? 'text-[#39FF14]' : 'text-[#FF1744]'}`}
                >
                  {position.pnl}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

