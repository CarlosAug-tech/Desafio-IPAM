import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 800px;
    width: 100%;
    margin: auto;

    > select {
        width: 100%;
    }
`;

export const Title = styled.h3`
    font-size: 28px;
    text-align: center;
`;
