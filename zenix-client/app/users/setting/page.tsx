'use client';

import { GeneralSettingsCard } from '@/components/users/setting/GeneralSettingsCard';
import { NotificationSettingsCard } from '@/components/users/setting/NotificationSettingsCard';
import { PrivacyDataCard } from '@/components/users/setting/PrivacyDataCard';

export default function SettingsPage() {
  return (
    <div className="py-4 md:py-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap justify-between gap-3 mb-6">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
              Settings and Security
            </p>
          </div>
        </div>
        <GeneralSettingsCard />
        <NotificationSettingsCard />
        <PrivacyDataCard />
      </div>
    </div>
  );
}

