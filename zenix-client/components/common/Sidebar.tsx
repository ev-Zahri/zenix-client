'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useLogOut } from '@/hooks/auth';
import Image from 'next/image';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
  { name: 'Trade', href: '/users/trade', icon: 'swap_horiz' },
  { name: 'Portfolio', href: '/users/portfolio', icon: 'pie_chart' },
  { name: 'Profile', href: '/users/profile', icon: 'person' },
  { name: 'Reports and Analytics', href: '/users/reports', icon: 'description' },
  { name: 'Settings and Security', href: '/users/setting', icon: 'settings' },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const { logOut } = useLogOut();

  return (
    <aside className="sticky top-0 flex w-64 flex-col border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-background-dark/50 h-screen">
      {/* Header - Fixed */}
      <div className="flex items-center m-3 shrink-0">
        <Image 
          src="/icons/logo-dark.png" 
          alt="Zenix" 
          width={32} 
          height={32} 
          className="mr-2" 
        />
        {/* <Image 
          src="/icons/logo-light.png" 
          alt="Zenix" 
          width={32} 
          height={32} 
          className="mr-2 hidden dark:block" 
        /> */}
        <span className="text-xl font-bold text-slate-800 dark:text-white text-center">Zenix</span>
      </div>
      
      {/* Navigation - Scrollable */}
      <div className="flex-1 overflow-y-auto px-4">
        <div className="flex flex-col gap-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800',
                  isActive && 'bg-primary/10 text-primary dark:bg-primary/20'
                )}
              >
                <span
                  className="material-symbols-outlined"
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {item.icon}
                </span>
                <p className="text-sm font-medium">{item.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
      
      {/* Footer - Fixed at bottom */}
      <div className="flex flex-col gap-1 p-4 shrink-0 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3 px-3 py-2">
          <Avatar className="size-10">
            <AvatarImage
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0y1QWuOgb5lJCcZLwpcC7Glr8x_2z9_PLMgZxjyByVUfTwA4ndkc3mKMRxNGokjwEYgCwOZTlfu1o2kUIi184ku9LhdzaRoGYtxMeirQgN62dU_2LaeYwnlhtqdTcTtxM9LlUPhx_rt01iIz6EVlMXFuor2yatb8TUCDkoy9f00SqDy52XqFh5y-ibSJx-IDKCD2E9njZnDd2Pmu79HIYyeY5iFwr-j54cHbeBJcfpJBuQR0fehY3ChwfLBgUalV6Jh6bVbxkRWU-"
              alt="John Doe's profile picture"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h2 className="text-slate-800 dark:text-white text-base font-medium leading-normal">
              John Doe
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
              john.doe@email.com
            </p>
          </div>
        </div>
        <button
          onClick={() => logOut()}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
        >
          <span className="material-symbols-outlined">logout</span>
          <p className="text-sm font-medium">Logout</p>
        </button>
      </div>
    </aside>
  );
};

