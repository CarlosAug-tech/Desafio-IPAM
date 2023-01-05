import React from 'react';
import { FaTimes } from 'react-icons/fa';

import { Button } from '../Button';

import { Container, Content, ModalTitle, CloseModal } from './styles';

interface IModalProps {
    children: React.ReactNode;
    title?: string;
    item: any;
    openModal: boolean;
    closeModal: Function | React.Dispatch<React.SetStateAction<any>>;
}

function Modal({ children, item, openModal, closeModal, title }: IModalProps) {
    return (
        <Container isVisible={openModal}>
            <Content>
                {title && <ModalTitle>{title}</ModalTitle>}
                {children}
                <CloseModal onClick={() => closeModal(false)}>
                    <Button>
                        <FaTimes />
                    </Button>
                </CloseModal>
            </Content>
        </Container>
    );
}

export { Modal };
