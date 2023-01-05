import React from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container, InputElement } from './styles';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: React.HTMLInputTypeAttribute;
    icon?: React.ComponentType<IconBaseProps>;
}

function Input({ type, icon: Icon, ...rest }: IInputProps) {
    return (
        <Container>
            <InputElement type={type} {...rest} />
            {Icon && <Icon />}
        </Container>
    );
}

export { Input };
