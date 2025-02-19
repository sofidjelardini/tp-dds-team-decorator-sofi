'use client';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';

interface RegistroPageProps {
    onSubmit: any;
    setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const obtenerContrasenasDesdeCSV = async (): Promise<any> => {
    const response = await fetch('/common-passwords.csv');
    const csvText = await response.text();

    return new Promise((resolve, reject) => {
        Papa.parse(csvText, {
            header: true,
            complete: (results: any) => {
                const passwordsSet = new Set(
                    results.data
                        .map((row: any) => row.password.trim())
                        .filter(Boolean)
                );
                resolve(passwordsSet);
            },
            error: (error: any) => {
                console.error('Error al analizar el archivo CSV:', error);
                reject(error);
            }
        });
    });
};

const formSchema = z
    .object({
        documento: z.string(),
        password: z
            .string()
            .min(8, {
                message: 'La contraseña debe tener al menos 8 caracteres'
            })
            .max(64, {
                message: 'La contraseña debe tener menos de 64 caracteres'
            }),
        password2: z.string(),
        personaJuridica: z.boolean().default(false).optional(),
        ayudarPersonas: z.boolean().default(false).optional()
    })
    .refine(data => data.password === data.password2, {
        message: 'Las contraseñas no coinciden',
        path: ['password2']
    });

export default function RegistroForm({
    onSubmit,
    setShowLogin
}: RegistroPageProps) {
    const [commonPass, setCommonPass] = useState<Set<string>>(new Set());
    const [passwordError, setPasswordError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCommonPasswords = async () => {
            const passwords = await obtenerContrasenasDesdeCSV();
            setCommonPass(passwords);
        };

        fetchCommonPasswords();
    }, []);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            documento: '',
            password: '',
            password2: '',
            personaJuridica: false,
            ayudarPersonas: false
        }
    });

    const onSubmitHandler = async (data: any) => {
        if (commonPass.has(data.password)) {
            setPasswordError('La contraseña es débil');
            return;
        }
        setPasswordError(null);
        await onSubmit(data);
    };

    return (
        <div className='mx-auto grid w-[400px] gap-6'>
            <div className='grid gap-2 text-left'>
                <h1 className='text-2xl font-bold'>SMAA - Registro</h1>
                <p className='text-balance text-muted-foreground'>
                    Sistema de Mejora para el Acceso Alimentario
                </p>
            </div>
            <div className='grid gap-y-3'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmitHandler)}>
                        <div className='grid gap-y-6'>
                            <div className='grid gap-2'>
                                <FormField
                                    control={form.control}
                                    name='documento'
                                    render={({ field, fieldState }) => (
                                        <FormItem>
                                            <FormLabel>Documento</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder='Documento'
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
                                                <Input
                                                    placeholder='Contraseña'
                                                    type='password'
                                                    onClick={() =>
                                                        setPasswordError(null)
                                                    }
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage>
                                                {fieldState.error?.message}
                                            </FormMessage>
                                            {passwordError && (
                                                <FormMessage className='text-red-500'>
                                                    {passwordError}
                                                </FormMessage>
                                            )}
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
                                            <FormLabel>
                                                Confirmar contraseña
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder='Repetir contraseña'
                                                    {...field}
                                                    onClick={() =>
                                                        setPasswordError(null)
                                                    }
                                                    type='password'
                                                />
                                            </FormControl>
                                            <FormMessage>
                                                {fieldState.error?.message}
                                            </FormMessage>
                                            {passwordError && (
                                                <FormMessage className='text-red-500'>
                                                    {passwordError}
                                                </FormMessage>
                                            )}
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className='grid gap-2'>
                                <FormField
                                    control={form.control}
                                    name='ayudarPersonas'
                                    render={({ field }) => (
                                        <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={
                                                        field.onChange
                                                    }
                                                />
                                            </FormControl>
                                            <div className='space-y-1 leading-none'>
                                                <FormLabel>
                                                    Registrar personas en sit.
                                                    vulnerable
                                                </FormLabel>
                                                <FormDescription>
                                                    Marque esta opción si deseas
                                                    colaborar en el registro de
                                                    personas vulnerables
                                                </FormDescription>
                                            </div>
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className='grid gap-2'>
                                <FormField
                                    control={form.control}
                                    name='personaJuridica'
                                    render={({ field }) => (
                                        <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={
                                                        field.onChange
                                                    }
                                                />
                                            </FormControl>
                                            <div className='space-y-1 leading-none'>
                                                <FormLabel>
                                                    Es usted una persona
                                                    jurídica?
                                                </FormLabel>
                                                <FormDescription>
                                                    Marque esta opción si está
                                                    registrando una persona
                                                    jurídica (Gubernamental,
                                                    ONG, Empresa o Institución)
                                                </FormDescription>
                                            </div>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button type='submit' className='w-full'>
                                Crear cuenta
                            </Button>
                        </div>
                    </form>
                </Form>
                <div className='text-center text-sm py-4'>
                    ¿Ya tienes una cuenta?
                    <Button
                        onClick={() => setShowLogin(true)}
                        className='underline bg-white hover:bg-white text-dark border-white shadow-none'
                    >
                        Inicia sesión
                    </Button>
                </div>
            </div>
        </div>
    );
}
