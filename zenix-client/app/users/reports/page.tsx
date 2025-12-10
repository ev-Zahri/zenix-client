'use client';

import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select";
import { useState } from "react";
import { PerformanceOverviewCard } from "@/components/users/reports/PerformanceOverviewCard";
import { TradingStatisticsCard } from "@/components/users/reports/TradingStatisticsCard";

export default function ReportsPage() {
    const [account, setAccount] = useState(['All Accounts', 'Account 1', 'Account 2', 'Account 3']);
    const [selectedAccount, setSelectedAccount] = useState('All Accounts');

    const [interval, setInterval] = useState(['1', '7', '30', '90', '180', '360']);
    const [selectedInterval, setSelectedInterval] = useState('1');

    return (
        <div className="py-4 md:py-6">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-wrap justify-between gap-3 mb-6">
                    <div className="flex min-w-72 flex-col gap-3">
                        <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                        Reports & Analytics
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    { /* Account Selector */ }
                    <Select value={selectedAccount} onValueChange={setSelectedAccount} >
                        <SelectTrigger className="w-1/3">
                            <SelectValue placeholder="Select Account" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup >
                                {account.map((item) => (
                                    <SelectItem key={item} value={item}>{item}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    { /* Interval Selector */ }
                    <Select value={selectedInterval} onValueChange={setSelectedInterval} >
                        <SelectTrigger className="w-36">
                            <SelectValue placeholder="Select Interval" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup >
                                {interval.map((item) => (
                                    <SelectItem key={item} value={item}>{item} Hari Terakhir</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col mt-3">
                    <PerformanceOverviewCard idAccount={selectedAccount} interval={selectedInterval} />
                    <TradingStatisticsCard idAccount={selectedAccount} interval={selectedInterval} />
                </div>
            </div>
        </div>
    )
}