import React from 'react';

import { Container } from './styles';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

function Button({ children, ...rest }: IButtonProps) {
    return <Container {...rest}>{children && children}</Container>;
}

export { Button };
