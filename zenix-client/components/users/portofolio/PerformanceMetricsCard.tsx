// Daftar feature:
// Daily/Weekly/Monthly PnL cards
// Win Rate %
// Profit Factor
// Total Return %

'use client';

import Orders from '@/types/orders';
import Transaction from '@/types/transaction';
import TradingAccount from '@/types/tradingAccount';
import { mockOrders } from '@/lib/mock';

interface PerformanceMetricsCardProps {
    userId: string;
    orders: Orders[];
    transaction: Transaction[];
    tradingAccount: TradingAccount[];
}

export default function PerformanceMetricsCard({ userId, orders, transaction, tradingAccount }: PerformanceMetricsCardProps) {
    const closedOrders = mockOrders.filter((order) => order.status === 'CLOSED');
    
    // Daily/Weekly/Monthly PnL
    const now = Date.now(); 

    const oneDayAgo = now - 24 * 60 * 60 * 1000;
    const oneWeekAgo = now - 7 * 24 * 60 * 60 * 1000;
    const oneMonthAgo = now - 30 * 24 * 60 * 60 * 1000; 

    const dailyPnL = closedOrders
        .filter((order) => { order.closedAt >= oneDayAgo.toString()})
        .reduce((sum, order) => sum + order.gainerPnl, 0);

    const weeklyPnL = closedOrders
        .filter((order) => { order.closedAt >= oneWeekAgo.toString()})
        .reduce((sum, order) => sum + order.gainerPnl, 0);

    const monthlyPnL = closedOrders
        .filter((order) => { order.closedAt >= oneMonthAgo.toString()})
        .reduce((sum, order) => sum + order.gainerPnl, 0);

    const totalPnL = closedOrders.reduce((sum, order) => sum + order.gainerPnl, 0);
    
    // Win rate %
    const totalClosedTrades = closedOrders.length;
    const winningTrades = closedOrders.filter((order) => order.gainerPnl > 0).length;
    // const losingTrades = closedOrders.filter((order) => order.gainerPnl < 0).length;
    const winrate = totalClosedTrades > 0 ? (winningTrades / totalClosedTrades) * 100 : 0;
    
    // Profit Factor
    const totalProfit = closedOrders.reduce((sum, order) => sum + (order.gainerPnl > 0 ? order.gainerPnl : 0), 0);
    const totalLoss = closedOrders.reduce((sum, order) => sum + (order.gainerPnl < 0 ? Math.abs(order.gainerPnl) : 0), 0);
    const profitFactor = totalLoss > 0 ? totalProfit / totalLoss : totalProfit > 0 ? Infinity : 0;
    
    // Total Return %
    const initialCapital = tradingAccount.length > 0 ? tradingAccount[0].balance : 10000; // Default to 10,000 if no account
    const finalCapital = initialCapital + closedOrders.reduce((sum, order) => sum + order.gainerPnl, 0);
    const totalReturn = initialCapital > 0 ? ((finalCapital - initialCapital) / initialCapital) * 100 : 0;

    return (
        <div>
            <h2>Performance Metrics</h2>
            <div>
                <p>Daily PnL: {dailyPnL}</p>
                <p>Weekly PnL: {weeklyPnL}</p>
                <p>Monthly PnL: {monthlyPnL}</p>
                <p>Win Rate %: {winrate}</p>
                <p>Profit Factor: {profitFactor}</p>
                <p>Total Return %: {totalReturn}</p>
            </div>
        </div>
    );
}