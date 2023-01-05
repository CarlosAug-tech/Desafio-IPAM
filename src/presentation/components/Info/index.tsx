import React from 'react';

import { Container } from './styles';

interface IInfoProps {
    textInfo: string;
    top?: string;
}

function Info({ textInfo, top }: IInfoProps) {
    return (
        <Container top={top}>
            <span>{textInfo}</span>
        </Container>
    );
}

export { Info };
