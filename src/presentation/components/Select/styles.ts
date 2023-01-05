import styled, { css } from 'styled-components';

interface IContainerProps {
    effectVisible?: boolean;
    isVisible?: boolean;
}

export const Container = styled.select<IContainerProps>`
    margin: 10px;
    padding: 10px;
    border-radius: 4px;
    transition: 0.4s ease;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
        0 1px 5px 0 rgb(0 0 0 / 20%);

    ${(props) =>
        props.effectVisible &&
        css`
            opacity: ${props.isVisible ? 1 : 0};
            visibility: ${props.isVisible ? 'visibility' : 'hidden'};
        `};

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
        background: #888;
    }
`;

export const Option = styled.option``;
