'use client';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
//import IconGoogle from '@/components/icons/IconGoogle';
import { Input } from '@/components/ui/input';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { useState } from 'react';
import { LoginForm } from '@/lib/types/auth.types';
import { LoginFormSchema } from '@/lib/form-schemas/auth.schemas';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    const form = useForm<LoginForm>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = () => {
        //TODO: Lógica para el login en el backend
        const userId = 1;
        localStorage.setItem('userId', `${userId}`);
        router.push(`/dashboard`);
    };

    return (
        <div className='mx-auto grid w-[350px] gap-6'>
            <div className='grid gap-2 text-left'>
                <h1 className='text-2xl font-bold'>SMAA</h1>
                <p className='text-balance text-muted-foreground'>
                    Sistema de Mejora para el Acceso Alimentario
                </p>
            </div>
            <div className='grid gap-y-8'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className='grid gap-y-8'>
                            <div className='grid gap-2'>
                                <FormField
                                    control={form.control}
                                    name='email'
                                    render={({ field, fieldState }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder='johndoe@correo.com'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage>
                                                {fieldState.error?.message}
                                            </FormMessage>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='grid gap-2'>
                                <FormField
                                    control={form.control}
                                    name='password'
                                    render={({ field, fieldState }) => (
                                        <FormItem>
                                            <div className='flex items-center'>
                                                <FormLabel>
                                                    Contraseña
                                                </FormLabel>
                                                <Link
                                                    href='/forgot-password'
                                                    className='ml-auto inline-block text-sm underline'
                                                >
                                                    ¿No recuerdas tu contraseña?
                                                </Link>
                                            </div>

                                            <FormControl>
                                                <Input
                                                    type='password'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage>
                                                {fieldState.error?.message}
                                            </FormMessage>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button
                                type='submit'
                                className='w-full'
                                disabled={isLoading}
                            >
                                Continuar
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}
