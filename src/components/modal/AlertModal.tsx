'use client';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Modal from './Modal';

interface AlertModalProps {
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    loading: boolean;
}

const AlertModal: React.FC<AlertModalProps> = ({
    title,
    description,
    isOpen,
    onClose,
    onConfirm,
    loading
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Modal
            title={title}
            description={description}
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className='flex w-full items-center justify-end space-x-2 pt-6'>
                <Button disabled={loading} variant='outline' onClick={onClose}>
                    Cancelar
                </Button>
                <Button
                    disabled={loading}
                    variant='destructive'
                    onClick={onConfirm}
                >
                    Continuar
                </Button>
            </div>
        </Modal>
    );
};

export default AlertModal;
