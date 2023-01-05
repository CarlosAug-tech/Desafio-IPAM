import styled from 'styled-components';

export const Container = styled.div`
    margin: 20px 0;
    position: relative;

    > svg {
        top: 16px;
        right: 10px;
        position: absolute;
    }
`;

export const InputElement = styled.input`
    width: 100%;
    padding: 16px 32px 16px 10px;
    border: 1px solid #333;
    border-radius: 4px;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
        0 1px 5px 0 rgb(0 0 0 / 20%);
`;
