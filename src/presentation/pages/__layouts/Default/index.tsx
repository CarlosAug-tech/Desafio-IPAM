import React from 'react';

import { Footer } from '../../../components/Footer';
import { Header } from '../../../components/Header';

import { Container } from './styles';

interface IDefaultLayoutProps {
    children: React.ReactNode;
}

function DefaultLayout({ children }: IDefaultLayoutProps) {
    return (
        <Container>
            <Header />
            {children}
            <Footer />
        </Container>
    );
}

export { DefaultLayout };
