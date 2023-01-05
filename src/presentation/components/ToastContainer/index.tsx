import React from 'react';
import { useTransition } from 'react-spring';

import { IToast } from '../../../infra/store/modules/Toast';
import { ToastItem } from './ToastItem';

import { Container } from './styles';

interface IToastContainerProps {
    messages: IToast[];
}

function ToastContainer({ messages }: IToastContainerProps) {
    const messagesWithTransations = useTransition(messages, {
        from: { right: '-120%', opacity: 0 },
        enter: { right: '0%', opacity: 1 },
        leave: { right: '-120%', opacity: 0 },
    });

    return (
        <Container>
            {messagesWithTransations((props, item) => (
                <ToastItem key={item.id} message={item} style={props} />
            ))}
        </Container>
    );
}

export { ToastContainer };
