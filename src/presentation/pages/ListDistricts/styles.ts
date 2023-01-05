import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;

    > div {
        min-height: calc(100vh - 180px);
    }
`;

export const ContainerError = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;

    > strong {
        font-size: 18px;
        color: #e91818;
    }
`;
