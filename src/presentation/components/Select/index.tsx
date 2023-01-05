import React from 'react';

import { Container, Option } from './styles';

interface ISelectProps {
    data: any[];
    defaultSelect: string;
    defaultSelectText: string;
    disabled?: boolean;
    dispatchSelect?: Function;
    clearSelect?: Function;
    option: any;
    setOption?: React.Dispatch<React.SetStateAction<any>>;
    effectVisible?: boolean;
    isVisible?: boolean;
}

function Select({
    data,
    defaultSelect,
    defaultSelectText,
    disabled,
    dispatchSelect,
    clearSelect,
    option,
    setOption,
    effectVisible,
    isVisible,
}: ISelectProps) {
    return (
        <Container
            isVisible={isVisible}
            effectVisible={effectVisible}
            disabled={disabled && disabled}
            value={option ?? defaultSelect}
            onChange={(e) =>
                (setOption && setOption(e.target.value)) ||
                (dispatchSelect &&
                    dispatchSelect(
                        data.find((item) => item.id === Number(e.target.value)),
                    ))
            }
        >
            <Option value={defaultSelect}>{defaultSelectText}</Option>
            {data &&
                data.map((item) => (
                    <Option key={item.id} value={item.id}>
                        {item.nome}
                    </Option>
                ))}
        </Container>
    );
}

export { Select };
