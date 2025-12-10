'use client';

import { Button } from "@/components/ui/button";
import { useState } from "react";

export const PrivacyDataCard = () => {
    const [referalCode, setReferalCode] = useState('');

    const generateReferalCode = () => {
        setReferalCode(Math.random().toString(36).substring(2, 32));
    };

    return (
        <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
            <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] border-slate-200 pb-4 dark:border-slate-800">
                Privacy Data
            </h2>
            <div className="flex gap-6 divide-slate-200 dark:divide-slate-800">
                <div className="flex flex-col gap-4 w-1/3">
                    { /* Data Export */}
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-800 dark:text-white">Export Log Transaction (csv)</span>
                        <Button variant="outline">Export</Button>
                    </div>
                    { /* Account Deletion */}
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-800 dark:text-white">Account Deletion</span>
                        <Button variant="outline">Delete</Button>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-1/3">
                    { /* Privacy Policy */}
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-800 dark:text-white">Privacy Policy</span>
                        <Button variant="outline">View</Button>
                    </div>
                    { /* Terms of Service */}
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-800 dark:text-white">Terms of Service</span>
                        <Button variant="outline">View</Button>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-1/3">
                    { /* Generate Referal Toggle */}
                    { !referalCode && (
                        <div className="flex items-center justify-between">
                            <span className="font-medium text-slate-800 dark:text-white">Generate Referal Toggle</span>
                                <Button onClick={generateReferalCode}>Generate</Button>
                        </div>
                    )}
                    { /* Referal Code */}
                    { referalCode && (
                        <div className="flex items-center justify-between">
                            <span className="font-medium text-slate-800 dark:text-white">Referal Code: {referalCode}</span>
                            <Button variant="outline">Copy</Button>
                        </div>
                    ) }
                </div>
            </div>
        </div>
    )
}