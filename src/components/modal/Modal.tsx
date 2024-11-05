'use client';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from '@/components/ui/dialog';
import { createContext, useContext } from 'react';

interface ModalProps {
    title?: string;
    description?: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

type ModalContextProps = {
    isOpen: boolean;

    onClose: () => void;
};

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};

const Modal: React.FC<ModalProps> = ({
    title,
    description,
    isOpen,
    onClose,
    children
}) => {
    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    return (
        <ModalContext.Provider value={{ isOpen, onClose }}>
            <Dialog open={isOpen} onOpenChange={onChange}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>{description}</DialogDescription>
                    </DialogHeader>
                    <div>{children}</div>
                </DialogContent>
            </Dialog>
        </ModalContext.Provider>
    );
};

export { useModal };

export default Modal;
