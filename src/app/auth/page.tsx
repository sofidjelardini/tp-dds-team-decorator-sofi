// 'use client';
// import Link from 'next/link';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import { Button } from '@/components/ui/button';
// import { Separator } from '@/components/ui/separator';
// //import IconGoogle from '@/components/icons/IconGoogle';
// import { Input } from '@/components/ui/input';
// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage
// } from '@/components/ui/form';
// import { useState } from 'react';
// import { LoginForm } from '@/lib/types/auth.types';
// import { LoginFormSchema } from '@/lib/form-schemas/auth.schemas';
// import { useRouter } from 'next/navigation';

// export default function Login() {
//     const [isLoading, setIsLoading] = useState<boolean>(false);
//     const router = useRouter();

//     const form = useForm<LoginForm>({
//         resolver: zodResolver(LoginFormSchema),
//         defaultValues: {
//             email: '',
//             password: ''
//         }
//     });

//     const onSubmit = () => {
//         //TODO: Lógica para el login en el backend
//         const userId = 1;
//         localStorage.setItem('userId', `${userId}`);
//         router.push(`/dashboard`);
//     };

//     return (
//         <div className='mx-auto grid w-[350px] gap-6'>
//             <div className='grid gap-2 text-left'>
//                 <h1 className='text-2xl font-bold'>SMAA</h1>
//                 <p className='text-balance text-muted-foreground'>
//                     Sistema de Mejora para el Acceso Alimentario
//                 </p>
//             </div>
//             <div className='grid gap-y-8'>
//                 <Form {...form}>
//                     <form onSubmit={form.handleSubmit(onSubmit)}>
//                         <div className='grid gap-y-8'>
//                             <div className='grid gap-2'>
//                                 <FormField
//                                     control={form.control}
//                                     name='email'
//                                     render={({ field, fieldState }) => (
//                                         <FormItem>
//                                             <FormLabel>Email</FormLabel>
//                                             <FormControl>
//                                                 <Input
//                                                     placeholder='johndoe@correo.com'
//                                                     {...field}
//                                                 />
//                                             </FormControl>
//                                             <FormMessage>
//                                                 {fieldState.error?.message}
//                                             </FormMessage>
//                                         </FormItem>
//                                     )}
//                                 />
//                             </div>
//                             <div className='grid gap-2'>
//                                 <FormField
//                                     control={form.control}
//                                     name='password'
//                                     render={({ field, fieldState }) => (
//                                         <FormItem>
//                                             <div className='flex items-center'>
//                                                 <FormLabel>
//                                                     Contraseña
//                                                 </FormLabel>
//                                                 <Link
//                                                     href='/forgot-password'
//                                                     className='ml-auto inline-block text-sm underline'
//                                                 >
//                                                     ¿No recuerdas tu contraseña?
//                                                 </Link>
//                                             </div>

//                                             <FormControl>
//                                                 <Input
//                                                     type='password'
//                                                     {...field}
//                                                 />
//                                             </FormControl>
//                                             <FormMessage>
//                                                 {fieldState.error?.message}
//                                             </FormMessage>
//                                         </FormItem>
//                                     )}
//                                 />
//                             </div>
//                             <Button
//                                 type='submit'
//                                 className='w-full'
//                                 disabled={isLoading}
//                             >
//                                 Continuar
//                             </Button>
//                         </div>
//                     </form>
//                 </Form>
//                 <div className='mt-4 text-center text-sm'>
//                     ¿No tienes una cuenta?{' '}
//                     <Link href='/auth/registro' className='underline'>
//                         Crea una
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }

// src/app/auth/registro/page.tsx
'use client';

import Link from 'next/link';
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
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { useDataForm } from '../context/DataFormContext';

const formSchema = z
    .object({
        usuario: z.string(),
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

export default function RegistroPage() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { setDataForm } = useDataForm();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            usuario: '',
            password: '',
            password2: '',
            personaJuridica: false,
            ayudarPersonas: false
        }
    });

    async function onSubmit(dataForm: z.infer<typeof formSchema>) {
        console.log('dataForm: ', dataForm);
        setIsLoading(true);
        setDataForm(dataForm);

        const userId = 1;
        localStorage.setItem('userId', `${userId}`);
        router.push(`/dashboard/${userId}/formulario-usuario`);
    }

    return (
        <div className='mx-auto grid w-[400px] gap-6'>
            <div className='grid gap-2 text-left'>
                <h1 className='text-2xl font-bold'>SMAA - Registro</h1>
                <p className='text-balance text-muted-foreground'>
                    Sistema de Mejora para el Acceso Alimentario
                </p>
            </div>
            <div className='grid gap-y-8'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className='grid gap-y-6'>
                            <div className='grid gap-2'>
                                <FormField
                                    control={form.control}
                                    name='usuario'
                                    render={({ field, fieldState }) => (
                                        <FormItem>
                                            <FormLabel>Usuario</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder='Usuario'
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
                                                    {...field}
                                                    type='password'
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
                            <Button
                                type='submit'
                                className='w-full'
                                disabled={isLoading}
                            >
                                Crear cuenta
                            </Button>
                        </div>
                    </form>
                </Form>
                <div className='text-center text-sm py-4'>
                    ¿Ya tienes una cuenta?{' '}
                    <Link href='/auth' className='underline'>
                        Inicia sesión
                    </Link>
                </div>
            </div>
        </div>
    );
}
