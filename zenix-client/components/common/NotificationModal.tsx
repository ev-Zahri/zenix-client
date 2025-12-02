'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  time: string;
  read: boolean;
}

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Mock data notifikasi
const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Order Executed',
    message: 'Your BUY order for EUR/USD has been executed at 1.0855',
    type: 'success',
    time: '2 minutes ago',
    read: false,
  },
  {
    id: '2',
    title: 'Price Alert',
    message: 'GBP/JPY has reached your target price of 201.50',
    type: 'info',
    time: '15 minutes ago',
    read: false,
  },
  {
    id: '3',
    title: 'Margin Warning',
    message: 'Your margin level is below 200%. Please consider reducing positions.',
    type: 'warning',
    time: '1 hour ago',
    read: true,
  },
  {
    id: '4',
    title: 'Deposit Successful',
    message: 'Your deposit of $10,000 has been processed successfully',
    type: 'success',
    time: '2 hours ago',
    read: true,
  },
  {
    id: '5',
    title: 'System Maintenance',
    message: 'Scheduled maintenance will occur on Dec 15, 2024 from 2:00 AM to 4:00 AM UTC',
    type: 'info',
    time: '1 day ago',
    read: true,
  },
];

export const NotificationModal = ({
  isOpen,
  onClose,
}: NotificationModalProps) => {
  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return 'check_circle';
      case 'warning':
        return 'warning';
      case 'error':
        return 'error';
      default:
        return 'info';
    }
  };

  const getNotificationColor = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return 'text-accent-green';
      case 'warning':
        return 'text-accent-yellow';
      case 'error':
        return 'text-accent-red';
      default:
        return 'text-accent-blue';
    }
  };

  const unreadCount = mockNotifications.filter((n) => !n.read).length;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-md bg-panel-dark border-background-dark gap-0 flex flex-col">
        <SheetHeader className="flex-row items-center justify-between gap-3 px-4 py-4 border-b border-background-dark">
          <div className="flex items-center gap-3">
            <SheetTitle className="text-white">Notifications</SheetTitle>
            {unreadCount > 0 && (
              <span className="bg-accent-blue text-black text-xs font-bold px-2 py-1 rounded-full">
                {unreadCount}
              </span>
            )}
          </div>
        </SheetHeader>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto">
          {mockNotifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <span className="material-symbols-outlined text-gray-500 text-5xl mb-2">
                notifications_off
              </span>
              <p className="text-gray-400 text-sm">No notifications</p>
            </div>
          ) : (
            <div className="divide-y divide-background-dark">
              {mockNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 hover:bg-background-dark/50 transition-colors cursor-pointer ${
                    !notification.read ? 'bg-background-dark/30' : ''
                  }`}
                >
                  <div className="flex gap-3">
                    <div
                      className={`shrink-0 ${getNotificationColor(notification.type)}`}
                    >
                      <span className="material-symbols-outlined text-2xl">
                        {getNotificationIcon(notification.type)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="text-white font-semibold text-sm">
                          {notification.title}
                        </h4>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-accent-blue rounded-full shrink-0 mt-1.5" />
                        )}
                      </div>
                      <p className="text-gray-400 text-sm mb-2 line-clamp-2">
                        {notification.message}
                      </p>
                      <span className="text-gray-500 text-xs">{notification.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {mockNotifications.length > 0 && (
          <div className="p-4 border-t border-background-dark bg-panel-dark mt-0">
            <Button
              className="w-full bg-background-dark hover:bg-background-dark/80 text-white"
              onClick={() => {
                console.log('Mark all as read');
              }}
            >
              Mark all as read
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

