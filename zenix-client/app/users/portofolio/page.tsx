'use client';

import OpenPositionsCard from '@/components/users/portofolio/OpenPositionsCard';
import PerformanceMetricsCard from '@/components/users/portofolio/PerformanceMetricsCard';
import { mockUsers, mockOrders, mockTransactions, mockTradingAccounts } from '@/lib/mock';

export default function PortofolioPage() {
  return (
    <div className="py-4 md:py-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap justify-between gap-3 mb-6">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
              Portofolio
            </p>
          </div>
        </div>
        <OpenPositionsCard userId={mockUsers[0].id} orders={mockOrders} transaction={mockTransactions} />
        <PerformanceMetricsCard userId={mockUsers[0].id} orders={mockOrders} transaction={mockTransactions} tradingAccount={mockTradingAccounts} />
      </div>
    </div>
  );
}
