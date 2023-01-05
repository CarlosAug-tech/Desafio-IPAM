import styled, { css } from 'styled-components';
import { Button } from '../Button';

interface IButtonPaginationProps {
    isActive: boolean;
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    width: 100%;
    padding: 10px;
    margin: 20px 0;

    > button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        padding: 5px;
        margin: 0 10px;
        border-radius: 50%;
        color: #fff;
        background: #008080;
        transition: all 0.4s ease;
    }
`;

export const ButtonPagination = styled(Button)<IButtonPaginationProps>`
    background: ${(props) =>
        props.isActive ? '#008080' : '#919f9f'}!important;

    &:hover {
        color: #e1d6d6;
        background: ${(props) =>
            props.isActive ? '#0a6e6e' : '#adabab'}!important;
    }
`;
