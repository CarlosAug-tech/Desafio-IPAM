import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    //align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1200px;
    width: 100%;
    height: 100%;
    margin: auto;
`;

export const ErrorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 20px 0;

    > strong {
        font-size: 18px;
        color: #e91818;
    }
`;
