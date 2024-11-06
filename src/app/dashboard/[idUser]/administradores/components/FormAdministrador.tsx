'use client';

import { z } from 'zod';
import Papa from 'papaparse';
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
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const formSchema = z
    .object({
        email: z.string().email({ message: 'Mail no válido' }),

        password: z
            .string()
            .min(8, {
                message: 'La contraseña debe tener al menos 8 caracteres'
            })
            .max(64, {
                message: 'La contraseña debe tener menos de 64 caracteres'
            }),
        password2: z.string()
    })
    .refine(data => data.password === data.password2, {
        message: 'Las contraseñas no coinciden',
        path: ['password2']
    });

const FormAdministrador = () => {
    const [commonPasswords, setCommonPasswords] = useState(new Set());

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
            password2: ''
        }
    });

    const onSubmit = (dataForm: z.infer<typeof formSchema>) => {
        if (isCommonPassword(dataForm.password)) {
            form.setError('password', {
                message: 'La contraseña ingresada es débil'
            });
            return;
        }
    };

    useEffect(() => {
        // Cargar y procesar el archivo CSV
        const fetchCSV = async () => {
            const response = await fetch('/common-passwords.csv');
            const csvText = await response.text();

            // Usar PapaParse para analizar el CSV
            Papa.parse(csvText, {
                header: true,
                complete: (results: any) => {
                    // Crear un conjunto con las contraseñas comunes
                    const passwordsSet = new Set(
                        results.data
                            .map((row: any) => row.password.trim())
                            .filter(Boolean)
                    );
                    setCommonPasswords(passwordsSet);
                },
                error: (error: any) => {
                    console.error('Error al analizar el archivo CSV:', error);
                }
            });
        };

        fetchCSV();
    }, []);

    const isCommonPassword = (password: string) => {
        return commonPasswords.has(password);
    };

    return (
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
                                    <FormLabel>Contraseña</FormLabel>

                                    <FormControl>
                                        <Input type='password' {...field} />
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
                            name='password2'
                            render={({ field, fieldState }) => (
                                <FormItem>
                                    <FormLabel>Confirmar Contraseña</FormLabel>

                                    <FormControl>
                                        <Input type='password' {...field} />
                                    </FormControl>
                                    <FormMessage>
                                        {fieldState.error?.message}
                                    </FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type='submit' className='w-full' disabled={false}>
                        Registrar administrador
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default FormAdministrador;
