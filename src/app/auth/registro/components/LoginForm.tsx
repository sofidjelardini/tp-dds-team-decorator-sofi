'use client';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const loginSchema = z.object({
    documento: z.string().min(6, 'El documento es requerido'),
    password: z.string().min(8, 'La contraseña es requerida')
});

interface LoginPageProps {
    setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoginPage({ setShowLogin }: LoginPageProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            documento: '',
            password: ''
        }
    });

    async function onSubmit(data: any) {
        setIsLoading(true);
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Error en las credenciales');
            }

            const result = await response.json();
            localStorage.setItem('userId', result.user.documento);
            router.push('/');
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className='mt-20 mx-auto grid w-[400px] gap-6'>
            <h1 className='text-2xl font-bold'>Iniciar Sesión</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name='documento'
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormLabel>Documento</FormLabel>
                                <FormControl>
                                    <Input placeholder='Documento' {...field} />
                                </FormControl>
                                <FormMessage>
                                    {fieldState.error?.message}
                                </FormMessage>
                            </FormItem>
                        )}
                    />
                    <div className='mt-5'>
                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field, fieldState }) => (
                                <FormItem>
                                    <FormLabel>Contraseña</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='Contraseña'
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
                    <div className='mt-10'>
                        <Button
                            type='submit'
                            className='w-full'
                            disabled={isLoading}
                        >
                            Iniciar Sesión
                        </Button>
                    </div>
                </form>
            </Form>
            <div className='text-center text-sm py-4'>
                ¿No tienes una cuenta?{' '}
                <Button
                    onClick={() => setShowLogin(false)}
                    className='underline bg-white hover:bg-white text-dark border-white shadow-none'
                >
                    Registrate
                </Button>
            </div>
        </div>
    );
}
