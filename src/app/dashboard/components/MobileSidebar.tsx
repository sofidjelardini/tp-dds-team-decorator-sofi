'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import DashboardNav from './DashboardNav';

const MobileSidebar = () => {
    const [userId, serUserId] = useState<string | null>('');
    useEffect(() => {
        serUserId(localStorage.getItem('userId'));
    }, []);
    const [open, setOpen] = useState(false);
    return (
        <>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger
                    asChild
                    className='focus:outline-none cursor-pointer'
                >
                    <MenuIcon />
                </SheetTrigger>
                <SheetContent side='left' className='!px-0'>
                    <div className='space-y-4 py-4'>
                        <div className='px-3 py-2'>
                            <h2 className='mb-4 px-4 text-lg font-semibold tracking-tight'>
                                Menú
                            </h2>
                            <div className='space-y-1'>
                                <DashboardNav
                                    isMobileNav={true}
                                    userId={userId}
                                />
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
};
export default MobileSidebar;
