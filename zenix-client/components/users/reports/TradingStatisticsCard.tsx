'use client';

import { useState, useMemo } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface TradingStatisticsCardProps {
    idAccount: string;
    interval: string;
}

// Mock data - akan diganti dengan data dari API
const generateMockData = (interval: string) => {
    const days = parseInt(interval);
    const symbols = ['EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD', 'XAU/USD'];
    const orderTypes = ['BUY', 'SELL'];
    
    // Generate daily PnL data
    const dailyPnL = [];
    for (let i = days - 1; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        dailyPnL.push({
            date: date.toLocaleDateString('id-ID', { day: '2-digit', month: 'short' }),
            pnl: Math.floor(Math.random() * 2000) - 1000,
        });
    }
    
    // Generate trades by symbol
    const tradesBySymbol = symbols.map(symbol => ({
        symbol,
        trades: Math.floor(Math.random() * 50) + 10,
        profit: Math.floor(Math.random() * 5000) - 2000,
    }));
    
    // Generate trades by type
    const tradesByType = orderTypes.map(type => ({
        type,
        count: Math.floor(Math.random() * 100) + 20,
        profit: Math.floor(Math.random() * 3000) - 1000,
    }));
    
    return { dailyPnL, tradesBySymbol, tradesByType };
};

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export const TradingStatisticsCard = ({ idAccount, interval }: TradingStatisticsCardProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _ = idAccount; // Will be used for API call
    const [activeTab, setActiveTab] = useState<'daily' | 'symbol' | 'type'>('daily');
    
    // TODO: Fetch data from API using idAccount and interval
    // const { data } = useQuery(['tradingStats', idAccount, interval], () => fetchTradingStats(idAccount, interval));
    
    const { dailyPnL, tradesBySymbol, tradesByType } = useMemo(
        () => generateMockData(interval),
        [interval]
    );
    
    // Calculate cumulative PnL for equity curve
    const equityCurve = dailyPnL.reduce((acc, curr) => {
        const previousValue = acc.length > 0 ? acc[acc.length - 1].equity : 10000;
        acc.push({
            date: curr.date,
            equity: previousValue + curr.pnl,
        });
        return acc;
    }, [] as { date: string; equity: number }[]);
    
    return (
        <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
            <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] border-slate-200 pb-4 dark:border-slate-800">
                Trading Statistics
            </h2>
            
            {/* Tab Navigation */}
            <div className="flex gap-2 mb-6 border-b border-slate-200 dark:border-slate-800">
                <button
                    onClick={() => setActiveTab('daily')}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                        activeTab === 'daily'
                            ? 'text-primary border-b-2 border-primary'
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                >
                    Daily Performance
                </button>
                <button
                    onClick={() => setActiveTab('symbol')}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                        activeTab === 'symbol'
                            ? 'text-primary border-b-2 border-primary'
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                >
                    By Symbol
                </button>
                <button
                    onClick={() => setActiveTab('type')}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                        activeTab === 'type'
                            ? 'text-primary border-b-2 border-primary'
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                >
                    By Type
                </button>
            </div>
            
            {/* Charts */}
            <div className="space-y-6">
                {/* Daily Performance Tab */}
                {activeTab === 'daily' && (
                    <div className="space-y-6">
                        {/* Daily PnL Chart */}
                        <div>
                            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                                Daily Profit/Loss
                            </h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={dailyPnL}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                    <XAxis 
                                        dataKey="date" 
                                        stroke="#94a3b8"
                                        fontSize={12}
                                    />
                                    <YAxis 
                                        stroke="#94a3b8"
                                        fontSize={12}
                                    />
                                    <Tooltip 
                                        contentStyle={{
                                            backgroundColor: '#1e293b',
                                            border: '1px solid #334155',
                                            borderRadius: '8px',
                                        }}
                                        labelStyle={{ color: '#e2e8f0' }}
                                    />
                                    <Bar 
                                        dataKey="pnl" 
                                        fill="#3b82f6"
                                        radius={[4, 4, 0, 0]}
                                    >
                                        {dailyPnL.map((entry, index) => (
                                            <Cell 
                                                key={`cell-${index}`} 
                                                fill={entry.pnl >= 0 ? '#10b981' : '#ef4444'} 
                                            />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        
                        {/* Equity Curve */}
                        <div>
                            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                                Equity Curve
                            </h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={equityCurve}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                    <XAxis 
                                        dataKey="date" 
                                        stroke="#94a3b8"
                                        fontSize={12}
                                    />
                                    <YAxis 
                                        stroke="#94a3b8"
                                        fontSize={12}
                                    />
                                    <Tooltip 
                                        contentStyle={{
                                            backgroundColor: '#1e293b',
                                            border: '1px solid #334155',
                                            borderRadius: '8px',
                                        }}
                                        labelStyle={{ color: '#e2e8f0' }}
                                    />
                                    <Line 
                                        type="monotone" 
                                        dataKey="equity" 
                                        stroke="#3b82f6" 
                                        strokeWidth={2}
                                        dot={{ fill: '#3b82f6', r: 3 }}
                                        activeDot={{ r: 6 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                )}
                
                {/* By Symbol Tab */}
                {activeTab === 'symbol' && (
                    <div className="space-y-6">
                        {/* Trades by Symbol - Bar Chart */}
                        <div>
                            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                                Trades by Symbol
                            </h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={tradesBySymbol}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                    <XAxis 
                                        dataKey="symbol" 
                                        stroke="#94a3b8"
                                        fontSize={12}
                                    />
                                    <YAxis 
                                        stroke="#94a3b8"
                                        fontSize={12}
                                    />
                                    <Tooltip 
                                        contentStyle={{
                                            backgroundColor: '#1e293b',
                                            border: '1px solid #334155',
                                            borderRadius: '8px',
                                        }}
                                        labelStyle={{ color: '#e2e8f0' }}
                                    />
                                    <Legend />
                                    <Bar dataKey="trades" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                    <Bar dataKey="profit" fill="#10b981" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        
                        {/* Distribution by Symbol - Pie Chart */}
                        <div>
                            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                                Distribution by Symbol
                            </h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={tradesBySymbol}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={false}
                                        outerRadius={100}
                                        fill="#8884d8"
                                        dataKey="trades"
                                    >
                                        {tradesBySymbol.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip 
                                        contentStyle={{
                                            backgroundColor: '#1e293b',
                                            border: '1px solid #334155',
                                            borderRadius: '8px',
                                        }}
                                    />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                )}
                
                {/* By Type Tab */}
                {activeTab === 'type' && (
                    <div className="space-y-6">
                        {/* Trades by Type - Bar Chart */}
                        <div>
                            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                                Trades by Type (BUY vs SELL)
                            </h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={tradesByType}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                    <XAxis 
                                        dataKey="type" 
                                        stroke="#94a3b8"
                                        fontSize={12}
                                    />
                                    <YAxis 
                                        stroke="#94a3b8"
                                        fontSize={12}
                                    />
                                    <Tooltip 
                                        contentStyle={{
                                            backgroundColor: '#1e293b',
                                            border: '1px solid #334155',
                                            borderRadius: '8px',
                                        }}
                                        labelStyle={{ color: '#e2e8f0' }}
                                    />
                                    <Legend />
                                    <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                    <Bar dataKey="profit" fill="#10b981" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        
                        {/* Distribution by Type - Pie Chart */}
                        <div>
                            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                                Distribution by Type
                            </h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={tradesByType}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={false}
                                        outerRadius={100}
                                        fill="#8884d8"
                                        dataKey="count"
                                    >
                                        {tradesByType.map((entry, index) => (
                                            <Cell 
                                                key={`cell-${index}`} 
                                                fill={entry.type === 'BUY' ? '#10b981' : '#ef4444'} 
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip 
                                        contentStyle={{
                                            backgroundColor: '#1e293b',
                                            border: '1px solid #334155',
                                            borderRadius: '8px',
                                        }}
                                    />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};