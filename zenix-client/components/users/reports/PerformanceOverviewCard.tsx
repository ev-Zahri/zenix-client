'use client';

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

interface PerformanceOverviewCardProps {
    idAccount: string;
    interval: string;
}

export const PerformanceOverviewCard = ({ idAccount, interval }: PerformanceOverviewCardProps) => {
    const [totalProfit, setTotalProfit] = useState(10);
    const [totalLoss, setTotalLoss] = useState(1);
    const [totalPnL, setTotalPnL] = useState(totalProfit - totalLoss);
    const [totalTrades, setTotalTrades] = useState(10);
    const [winRate, setWinRate] = useState(50);
    const [averageProfitPerTrade, setAverageProfitPerTrade] = useState(totalPnL / totalTrades);

    const [bestTrade, setBestTrade] = useState(10);
    const [worstTrade, setWorstTrade] = useState(1);
    
    return (
        <div className="mb-8 w-full rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
            <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] border-slate-200 pb-4 dark:border-slate-800">
                Performance Overview
            </h2>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                    { /* Total PnL */ }
                    <div>
                        <p className="text-slate-900 dark:text-white leading-tight border-slate-200 dark:border-slate-800">
                            Total Profit / Loss { totalPnL > 0 ? 
                            <span className="text-green-500">USD +{totalPnL}</span> 
                            : <span className="text-red-500">USD -{totalPnL}</span> }
                        </p>
                    </div>
                    { /* Total Trades */ }
                    <div>
                        <p className="text-slate-900 dark:text-white leading-tight border-slate-200 dark:border-slate-800">
                            Total Trades { totalTrades }
                        </p>
                    </div>
                    { /* Win Rate */ }
                    <div>
                        <p className="text-slate-900 dark:text-white leading-tight border-slate-200 dark:border-slate-800">
                            Win Rate { winRate }%
                        </p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-3">
                        { /* Average Profit per Trade */ }
                        <div>
                            <p className="text-slate-900 dark:text-white leading-tight border-slate-200 dark:border-slate-800">
                                Average Profit per Trade { averageProfitPerTrade > 0 ? 
                                <span className="text-green-500">USD +{averageProfitPerTrade}</span> 
                                : <span className="text-red-500">USD -{averageProfitPerTrade}</span> }
                            </p>
                        </div>
                        { /* Best Trade */ }
                        <div>
                            <p className="text-slate-900 dark:text-white leading-tight border-slate-200 dark:border-slate-800">
                                Best Trade { bestTrade > 0 ? 
                                <span className="text-green-500">USD +{bestTrade}</span> 
                                : <span className="text-red-500">USD -{bestTrade}</span> }
                            </p>
                        </div>
                        { /* Worst Trade */ }
                        <div>
                            <p className="text-slate-900 dark:text-white leading-tight border-slate-200 dark:border-slate-800">
                                Worst Trade { worstTrade > 0 ? 
                                <span className="text-green-500">USD +{worstTrade}</span> 
                                : <span className="text-red-500">USD -{worstTrade}</span> }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}