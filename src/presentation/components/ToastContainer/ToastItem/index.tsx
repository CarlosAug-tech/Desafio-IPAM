import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaCheckCircle, FaExclamationCircle, FaTimes } from 'react-icons/fa';

import { IToast, removeToast } from '../../../../infra/store/modules/Toast';

import { ClosePopUp, ToastPopUp } from './styles';

interface IToastItemProps {
    message: IToast;
    style: any;
}

function ToastItem({ message, style }: IToastItemProps) {
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(removeToast(message.id));
        }, 3000);

        return () => clearTimeout(timer);
    }, [message.id]);

    return (
        <ToastPopUp type={message.type} style={style}>
            {message.type === 'success' ? (
                <FaCheckCircle />
            ) : (
                <FaExclamationCircle />
            )}
            <span>{message.title}</span>
            {message.description && <p>{message.description}</p>}

            <ClosePopUp
                type="button"
                onClick={() => dispatch(removeToast(message.id))}
            >
                <FaTimes />
            </ClosePopUp>
        </ToastPopUp>
    );
}

export { ToastItem };
