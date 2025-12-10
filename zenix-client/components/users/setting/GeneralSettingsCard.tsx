'use client';

import { useState } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const GeneralSettingsCard = () => {

    const [language, setLanguage] = useState(['Indonesia', 'English']);
    const [selectedLanguage, setSelectedLanguage] = useState('Indonesia');

    const [timeZone, setTimeZone] = useState(['UTC+7', 'UTC+8', 'UTC+9']);
    const [selectedTimeZone, setSelectedTimeZone] = useState('UTC+7');

    const [currency, setCurrency] = useState(['USD', 'EUR', 'GBP']);
    const [selectedCurrency, setSelectedCurrency] = useState('USD');

    const [theme, setTheme] = useState(['Light', 'Dark']);
    const [selectedTheme, setSelectedTheme] = useState('Light');

    const [dateFormat, setDateFormat] = useState(['DD/MM/YYYY', 'MM/DD/YYYY']);
    const [selectedDateFormat, setSelectedDateFormat] = useState('DD/MM/YYYY');

    const [leverage, setLeverage] = useState(['1:1', '1:10', '1:100', '1:1000', '1:2000']);
    const [selectedLeverage, setSelectedLeverage] = useState('1:1000');

    return (
        <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
            <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] border-slate-200 pb-4 dark:border-slate-800">
                General Settings
            </h2>
            { /* Language Settings */}
            <div className="flex gap-6 divide-slate-200 dark:divide-slate-800">
                <div className="flex flex-col gap-4 w-1/3">
                    { /* Language Settings */}
                    <div className='flex items-center justify-between'>
                        <span className="font-medium text-slate-800 dark:text-white">Language</span>
                        <div className="w-36">
                            <Select value={selectedLanguage} onValueChange={setSelectedLanguage} >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Language" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup >
                                        {language.map((item) => (
                                            <SelectItem key={item} value={item}>{item}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    { /* Time Zone Settings */}
                    <div className='flex items-center justify-between'>
                        <span className="font-medium text-slate-800 dark:text-white">Time Zone</span>
                        <div className="w-36">
                            <Select value={selectedTimeZone} onValueChange={setSelectedTimeZone}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Time Zone" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {timeZone.map((item) => (
                                            <SelectItem key={item} value={item}>{item}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-1/3">
                    { /* Currency Settings */}
                    <div className='flex items-center justify-between'>
                        <span className="font-medium text-slate-800 dark:text-white">Currency</span>
                        <div className="w-36">
                            <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Currency" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {currency.map((item) => (
                                            <SelectItem key={item} value={item}>{item}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    { /* Theme Settings */}
                    <div className='flex items-center justify-between'>
                        <span className="font-medium text-slate-800 dark:text-white">Theme</span>
                        <div className="w-36">
                            <Select value={selectedTheme} onValueChange={setSelectedTheme}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Theme" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {theme.map((item) => (
                                            <SelectItem key={item} value={item}>{item}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-1/3">
                    { /* Date Format */}
                    <div className='flex items-center justify-between'>
                        <span className="font-medium text-slate-800 dark:text-white">Date Format</span>
                        <div className="w-36">
                            <Select value={selectedDateFormat} onValueChange={setSelectedDateFormat}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Date Format" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {dateFormat.map((item) => (
                                            <SelectItem key={item} value={item}>{item}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    { /* Leverage Selector */}
                    <div className='flex items-center justify-between'>
                        <span className="font-medium text-slate-800 dark:text-white">Leverage</span>
                        <div className="w-36">
                            <Select value={selectedLeverage} onValueChange={setSelectedLeverage}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Leverage" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {leverage.map((item) => (
                                            <SelectItem key={item} value={item}>{item}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}