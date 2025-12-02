'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { NotificationModal } from "@/components/common/NotificationModal";
import { useLogOut } from "@/hooks/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const Header = () => {
  const [hiddenBalance, setHiddenBalance] = useState(false);
  const [hiddenEquity, setHiddenEquity] = useState(false);
  const [isNotificationOpenModal, setIsNotificationOpenModal] = useState(false);
  const router = useRouter();
  const { logOut, isLoggedIn } = useLogOut();
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-panel-dark px-6 py-3 bg-background-dark shrink-0">
      <div className="flex items-center gap-4 text-white">
        <div className="size-6 text-accent-blue">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor" />
          </svg>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          Zenix
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-2 items-end">
        <div className="flex items-end gap-6">
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-400 flex items-center gap-1 select-none">
              Balance
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setHiddenBalance((prev) => !prev);
                }}
                className="focus:outline-none cursor-pointer"
                aria-label={hiddenBalance ? "Show Balance" : "Hide Balance"}
                tabIndex={0}
              >
                <span className="material-symbols-outlined text-sm align-middle">
                  {hiddenBalance ? "visibility_off" : "visibility"}
                </span>
              </button>
            </span>
            <span className="font-semibold">{hiddenBalance ? '********' : '$1,250,345.82'}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-400 flex items-center gap-1 select-none">
              Equity
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setHiddenEquity((prev) => !prev);
                }}
                className="focus:outline-none cursor-pointer"
                aria-label={hiddenEquity ? "Show Equity" : "Hide Equity"}
                tabIndex={0}
              >
                <span className="material-symbols-outlined text-sm align-middle">
                  {hiddenEquity ? "visibility_off" : "visibility"}
                </span>
              </button>
            </span>
            <span className="font-semibold text-accent-green">{hiddenEquity ? '********' : '$1,288,109.21'}</span>
          </div>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 ml-3 px-4 bg-accent-blue text-black text-sm font-bold leading-normal tracking-[0.015em]" onClick={() => {
          router.push('/deposit');
        }}>
          <span className="truncate">Deposit</span>
        </button>
        <button
          className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-panel-dark text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-panel-dark/80 transition-colors relative"
          onClick={() => setIsNotificationOpenModal(true)}
          aria-label="Open notifications"
        >
          <span className="material-symbols-outlined text-white">notifications</span>
          <span className="absolute top-1 right-1 w-2 h-2 bg-accent-red rounded-full" />
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-panel-dark text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-panel-dark/80 transition-colors">
              {isLoggedIn ? (
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmG6Ui5K6d5kM0Vi-ZX21Z2_IIUuNv1wU4oxBgQhMBGZAi9HvEoS1cZ0jEbt9PLT5ntdaTaa-NLvQg3jdJChL8OQntBSey99ZeWhwaFRyeHCnCD7vhEx3V6YlHGvODAcJfAKkdGRUNJuXsiAk7qvUQ19VY7E3R3-7-Q-xGSoPMO7RkHhy8M7HugYYlHixCqEDMx3RJ9_TnOrhRa3t5kdLLfMei-tQXuRGLCIyemWkxQ15WYSRHjmnnSqU9aSW5W_f4kbx6sEcvXJ7_"
                    alt="User avatar"
                  />
                  <AvatarFallback>
                    <span className="material-symbols-outlined text-white">person</span>
                  </AvatarFallback>
                </Avatar>
              ) : (
                <span className="material-symbols-outlined text-white">person</span>
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-panel-dark border-background-dark">
            <DropdownMenuItem
              onClick={() => router.push('/profile')}
              className="text-white hover:bg-background-dark cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg mr-2">person</span>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push('/settings')}
              className="text-white hover:bg-background-dark cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg mr-2">settings</span>
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => logOut()}
              className="text-accent-red hover:bg-background-dark cursor-pointer"
              variant="destructive"
            >
              <span className="material-symbols-outlined text-lg mr-2">logout</span>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <NotificationModal
        isOpen={isNotificationOpenModal}
        onClose={() => setIsNotificationOpenModal(false)}
      />
    </header>
  );
};

