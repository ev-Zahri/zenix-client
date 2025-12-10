'use client';

import { useState } from "react";

export const NotificationSettingsCard = () => {
    const [emailNotificationToggle, setEmailNotificationToggle] = useState(false);  
    const [tradingAlertsToggle, setTradingAlertsToggle] = useState(false);
    const [securityAlertsToggle, setSecurityAlertsToggle] = useState(false);
    const [marketingEmailsToggle, setMarketingEmailsToggle] = useState(false);
    const [notificationSoundToggle, setNotificationSoundToggle] = useState(false);

    return (
        <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
            <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] border-slate-200 pb-4 dark:border-slate-800">
                Notification Settings
            </h2>
            <div className="flex gap-6 divide-slate-200 dark:divide-slate-800">
                <div className="flex flex-col gap-4 w-1/2">
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-800 dark:text-white">Email Notification</span>
                        { /* Email Notification Toggle */}
                        <label className="relative inline-flex cursor-pointer items-center ml-6">
                            <input
                            checked={emailNotificationToggle}
                            onChange={(e) => setEmailNotificationToggle(e.target.checked)}
                            className="peer sr-only"
                            type="checkbox"
                            />
                            <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-slate-600 dark:bg-slate-700"></div>
                        </label>
                    </div>
                    { /* Trading Alerts Toggle */}
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-800 dark:text-white">Trading Alerts</span>
                        <label className="relative inline-flex cursor-pointer items-center ml-6">
                            <input
                            checked={tradingAlertsToggle}
                            onChange={(e) => setTradingAlertsToggle(e.target.checked)}
                            className="peer sr-only"
                            type="checkbox"
                            />
                            <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-slate-600 dark:bg-slate-700"></div>
                        </label>
                    </div>
                    { /* Security alerts toggle */}
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-800 dark:text-white">Security Alerts</span>
                        <label className="relative inline-flex cursor-pointer items-center ml-6">
                            <input
                            checked={securityAlertsToggle}
                            onChange={(e) => setSecurityAlertsToggle(e.target.checked)}
                            className="peer sr-only"
                            type="checkbox"
                            />
                            <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-slate-600 dark:bg-slate-700"></div>
                        </label>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-1/2">
                    { /* Marketing emails toggle */}
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-800 dark:text-white">Marketing Emails</span>
                        <label className="relative inline-flex cursor-pointer items-center ml-6">
                            <input
                            checked={marketingEmailsToggle}
                            onChange={(e) => setMarketingEmailsToggle(e.target.checked)}
                            className="peer sr-only"
                            type="checkbox"
                            />
                            <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-slate-600 dark:bg-slate-700"></div>
                        </label>
                    </div>
                    { /* Notification sound toggle */}
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-800 dark:text-white">Notification Sound</span>
                        <label className="relative inline-flex cursor-pointer items-center ml-6">
                            <input
                            checked={notificationSoundToggle}
                            onChange={(e) => setNotificationSoundToggle(e.target.checked)}
                            className="peer sr-only"
                            type="checkbox"
                            />
                            <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-slate-600 dark:bg-slate-700"></div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}