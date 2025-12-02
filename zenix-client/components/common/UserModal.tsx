'use client';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useRouter } from 'next/navigation';
import { useLogOut } from '@/hooks/auth';

interface UserModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const UserModal = ({ 
    isOpen,
    onClose,
}: UserModalProps) => {
    const router = useRouter();
    const { logOut, isLoggedIn } = useLogOut();
    return (
        <>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {!isLoggedIn ? (
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </Button>
                ) : (
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        <span className="material-symbols-outlined">Person</span>
                    </Button>
                )}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => router.push('/profile')}>
                    <span className="material-symbols-outlined">Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/settings')}>
                    <span className="material-symbols-outlined">settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => logOut()}>
                    <span className="material-symbols-outlined">logout</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </>
    )
}