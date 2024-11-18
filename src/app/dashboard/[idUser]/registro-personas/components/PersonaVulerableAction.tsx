'use client';

import AlertModal from '@/components/modal/AlertModal';
import Modal from '@/components/modal/Modal';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
// import client from '@/lib/api/client';
// import { Service } from '@/lib/types/service.types';
import { Edit, MoreHorizontal, Trash } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import DetalleTarjeta from './DetalleTarjeta';
// import { toast } from 'sonner';
// import useSWRMutation from 'swr/mutation';

// const fetcher = (url: string) => client.get(url);

export const PersonaVulnerableAction = ({ data }: { data: any }) => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [isOpenDetalleTarjeta, setIsOpenDetalleTarjeta] = useState(false);
    const router = useRouter();
    const { idUser } = useParams();
    // const { trigger } = useSWRMutation(
    //     `/businesses/${idUser}/services`,
    //     fetcher
    // );

    async function onConfirmDelete() {
        // try {
        //     setLoading(true);
        //     await client.delete(
        //         `/businesses/${idUser}/services/${data.idService}`
        //     );
        //     trigger();
        //     toast.success('Servicio eliminado con éxito');
        // } catch (error) {
        //     console.log(error);
        // } finally {
        //     setLoading(false);
        // }
    }

    const handleUpdateService = () => {
        setIsOpenEdit(true);
    };

    return (
        <>
            <AlertModal
                title='¿Estás seguro que quieres continuar?'
                description='Esta acción no puede revertirse.'
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onConfirmDelete}
                loading={loading}
            />

            <Modal
                title='Editar información'
                description=''
                isOpen={isOpenEdit}
                onClose={() => setIsOpenEdit(false)}
            >
                {/* <ServiceForm
                    idUser={`${idUser}`}
                    data={data}
                    afterOnSubmit={() => setIsOpenEdit(false)}
                /> */}
            </Modal>

            <Modal
                title='Detalle de tarjeta asociada'
                description=''
                isOpen={isOpenDetalleTarjeta}
                onClose={() => setIsOpenDetalleTarjeta(false)}
            >
                <DetalleTarjeta />
            </Modal>

            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Button variant='ghost' className='h-8 w-8 p-0'>
                        <span className='sr-only'>Abrir menú</span>
                        <MoreHorizontal className='h-4 w-4' />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>

                    <DropdownMenuItem onClick={handleUpdateService}>
                        <Edit className='mr-2 h-4 w-4' /> Actualizar
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => setIsOpenDetalleTarjeta(true)}
                    >
                        <Edit className='mr-2 h-4 w-4' /> Ver detalle tarjeta
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setOpen(true)}>
                        <Trash className='mr-2 h-4 w-4' /> Eliminar
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};
