'use client';
import Link from 'next/link';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
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
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '@/components/ui/popover';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const FormPersona = () => {
    const form = useForm({
        defaultValues: {
            nombre: '',
            fechaNacimiento: '',
            tipoDoc: '',
            numDoc: '',
            poseeDomicilio: false,
            domicilio: '',
            cantMenoresACargo: '0'
        }
    });

    const onSubmit = () => {};

    return (
        <div className='mx-auto grid w-1/2 gap-6'>
            <div className='grid gap-2 text-left'>
                <h1 className='text-2xl font-bold'>Formulario de Registro</h1>
            </div>
            <div className='grid gap-y-8'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className='grid gap-y-6'>
                            <div className='grid gap-2'>
                                <FormField
                                    control={form.control}
                                    name='nombre'
                                    render={({ field, fieldState }) => (
                                        <FormItem>
                                            <FormLabel>Usuario</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder='Nombre'
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
                                    name='fechaNacimiento'
                                    render={({ field }) => (
                                        <FormItem className='flex flex-col'>
                                            <FormLabel>
                                                Fecha de nacimiento
                                            </FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={'outline'}
                                                            className={cn(
                                                                'w-[240px] pl-3 text-left font-normal',
                                                                !field.value &&
                                                                    'text-muted-foreground'
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(
                                                                    field.value,
                                                                    'PPP'
                                                                )
                                                            ) : (
                                                                <span>
                                                                    mm/dd/yyyyy
                                                                </span>
                                                            )}
                                                            <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent
                                                    className='w-auto p-0'
                                                    align='start'
                                                >
                                                    <Calendar
                                                        mode='single'
                                                        selected={field.value}
                                                        onSelect={
                                                            field.onChange
                                                        }
                                                        disabled={date =>
                                                            date > new Date() ||
                                                            date <
                                                                new Date(
                                                                    '1900-01-01'
                                                                )
                                                        }
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='flex gap-4'>
                                <div className='grid gap-2 S'>
                                    <FormField
                                        control={form.control}
                                        name='tipoDoc'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Tipo de documento
                                                </FormLabel>
                                                <Select
                                                    onValueChange={
                                                        field.onChange
                                                    }
                                                    defaultValue={field.value}
                                                >
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder='DNI' />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value='m@example.com'>
                                                            m@example.com
                                                        </SelectItem>
                                                        <SelectItem value='m@google.com'>
                                                            m@google.com
                                                        </SelectItem>
                                                        <SelectItem value='m@support.com'>
                                                            m@support.com
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>

                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className='grid gap-2'>
                                    <FormField
                                        control={form.control}
                                        name='numDoc'
                                        render={({ field, fieldState }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Número de documento
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder='Número de identif.'
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
                            </div>

                            <div className='grid gap-2'>
                                <FormField
                                    control={form.control}
                                    name='domicilio'
                                    render={({ field, fieldState }) => (
                                        <FormItem>
                                            <FormLabel>Domiclio</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder='Domicilio'
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
                                    name='cantMenoresACargo'
                                    render={({ field, fieldState }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Cantidad de menores a cargo
                                            </FormLabel>
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
                            <Button
                                type='submit'
                                className='w-full'
                                disabled={false}
                            >
                                Guardar cambios
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default FormPersona;
