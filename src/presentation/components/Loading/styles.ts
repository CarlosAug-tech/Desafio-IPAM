import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 20px 0;

    > svg {
        animation: rotateAnimation 2s linear infinite;
    }

    @keyframes rotateAnimation {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
`;
