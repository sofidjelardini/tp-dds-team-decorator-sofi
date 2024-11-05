import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export default function LoginLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='w-full h-screen lg:grid lg:grid-cols-2'>
            <div className='flex items-center justify-center py-8 px-4 lg:py-0'>
                {children}
            </div>
            <div className='hidden bg-muted lg:flex items-center justify-center w-full h-full bg-slate-100'>
                <img
                    src='/images/auth-illustration.svg'
                    alt='Image'
                    className='h-[350px] dark:brightness-[0.2] dark:grayscale'
                />
            </div>
        </div>
    );
}
