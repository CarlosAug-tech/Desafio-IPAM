import styled from 'styled-components';

interface IContainerProps {
    top?: string;
}

export const Container = styled.div<IContainerProps>`
    z-index: 10;
    cursor: text;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: max-content;
    padding: 5px;
    top: ${(props) => (props.top ? props.top : '30px')};
    left: 50%;
    position: absolute;
    border-radius: 4px;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    transform: translateX(-50%);
    transition: 0.4s ease;

    &::before {
        content: '';
        top: -10px;
        left: 50%;
        position: absolute;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid rgba(0, 0, 0, 0.5);
        transform: translateX(-50%);
    }
`;
