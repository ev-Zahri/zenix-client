import { Header } from '@/components/common/Header';
import { Watchlist } from '@/components/dashboard/Watchlist';
import { ChartArea } from '@/components/dashboard/ChartArea';
import { OpenPositions } from '@/components/dashboard/OpenPositions';
import { OrderEntry } from '@/components/dashboard/OrderEntry';

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <Watchlist />
        {/* Main Content Area */}
        <main className="flex-1 flex flex-col p-4 gap-4 overflow-hidden">
          {/* <ChartArea /> */}
          <OpenPositions />
        </main>
        <OrderEntry />
      </div>
    </div>
  );
}

