import styled, { css } from 'styled-components';

interface IContainerProps {
    isVisible: boolean;
}

export const Container = styled.div<IContainerProps>`
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding: 20px;
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.4s ease;

    ${(props) =>
        props.isVisible
            ? css`
                  opacity: 1;
                  visibility: visible;
              `
            : css`
                  opacity: 0;
                  visibility: hidden;
              `};
`;

export const Content = styled.div`
    max-width: 800px;
    width: 100%;
    padding: 20px;
    min-height: 400px;
    position: relative;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
        0 1px 5px 0 rgb(0 0 0 / 20%);
`;

export const CloseModal = styled.div`
    top: -10px;
    right: -10px;
    position: absolute;

    > button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #fff;
        background: #008080;
    }
`;

export const ModalTitle = styled.h3`
    font-size: 30px;
    text-align: center;
`;
