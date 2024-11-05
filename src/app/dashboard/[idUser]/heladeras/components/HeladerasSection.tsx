'use client';

import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

import Modal from '@/components/modal/Modal';

const HeladerasSection = () => {
    const { idUser } = useParams();
    const [isOpenModalHeladera, setIsOpenModalHeladera] =
        useState<boolean>(false);

    return (
        <div>
            <Button
                variant='outline'
                className='my-4'
                onClick={() => setIsOpenModalHeladera(true)}
            >
                Nueva heladera
            </Button>
            <Modal
                title='Nuevo empleado'
                description=''
                isOpen={isOpenModalHeladera}
                onClose={() => setIsOpenModalHeladera(false)}
            >
                <div>hola mundo</div>
            </Modal>
            //
            {/* <DataTableEmployee idUser={idUser.toString()} /> */}
        </div>
    );
};

export default HeladerasSection;
