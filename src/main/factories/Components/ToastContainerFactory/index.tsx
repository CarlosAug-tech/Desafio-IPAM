import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from '../../../../presentation/components/ToastContainer';

function ToastContainerFactory() {
    const toasts = useSelector((state: any) => state.toast.toasts);

    return <ToastContainer messages={toasts} />;
}

export { ToastContainerFactory };
