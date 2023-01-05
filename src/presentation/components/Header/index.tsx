import React from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    NavHeader,
    LogoHeader,
    ListHeader,
    ListItem,
} from './styles';

function Header() {
    return (
        <Container>
            <NavHeader>
                <LogoHeader>
                    <Link to="/">Projeto - Desafio IPAM</Link>
                </LogoHeader>
                <ListHeader>
                    <ListItem>
                        <Link to="/">Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/listDistricts">Lista de Distritos</Link>
                    </ListItem>
                </ListHeader>
            </NavHeader>
        </Container>
    );
}

export { Header };
