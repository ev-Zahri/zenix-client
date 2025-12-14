// Daftar feature:
// Table: Semua Order dengan status OPEN
// Columns: Symbol, Type, Volume, Open Price, Current Price, Floating PnL, SL, TP
// Action: Close Position button per row
// Total Floating PnL summary

'use client';

import Orders from '@/types/orders';
import Transaction from '@/types/transaction';
import { mockOpenOrders } from '@/lib/mock';
import { mockSymbols } from '@/lib/mock';

interface OpenPositionsCardProps {
    userId: string;
    orders: Orders[];
    transaction: Transaction[];
}

export default function OpenPositionsCard({ userId, orders, transaction }: OpenPositionsCardProps) {
    const openOrders = mockOpenOrders;
    const totalFloatingPnL = openOrders.reduce((total, order) => total + order.gainerPnl, 0);
    const symbols = mockSymbols;

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Open Positions</h2>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Symbol</th>
                        <th className="px-4 py-2">Type</th>
                        <th className="px-4 py-2">Volume</th>
                        <th className="px-4 py-2">Open Price</th>
                        <th className="px-4 py-2">Current Price</th>
                        <th className="px-4 py-2">Floating PnL</th>
                        <th className="px-4 py-2">SL</th>
                        <th className="px-4 py-2">TP</th>
                        <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {openOrders.map((order) => (
                        <tr key={order.id}>
                            <td className="px-4 py-2">{
                                symbols.find((symbol) => symbol.code === order.symbolId)?.code
                            }</td>
                            <td className="px-4 py-2">{order.type}</td>
                            <td className="px-4 py-2">{order.volume}</td>
                            <td className="px-4 py-2">{order.openPrice}</td>
                            <td className="px-4 py-2">{order.currentPrice}</td>
                            <td className="px-4 py-2">{order.gainerPnl}</td>
                            <td className="px-4 py-2">{order.stopLoss}</td>
                            <td className="px-4 py-2">{order.takeProfit}</td>
                            <td className="px-4 py-2">
                                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                                    Close Position
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4">
                <p className="text-lg font-semibold">Total Floating PnL: {totalFloatingPnL}</p>
            </div>
        </div>
    );
}
