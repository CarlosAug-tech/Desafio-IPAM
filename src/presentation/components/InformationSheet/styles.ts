import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const HeaderInfoSheet = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
    background: #d5f7f7;

    @media (max-width: 500px) {
        flex-wrap: wrap;

        > div {
            & + div {
                margin-top: 10px;
            }
        }
    }
`;

export const HeaderDescriptionInfoSheet = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    & + div {
        margin-left: 3px;
        padding-left: 3px;
    }

    > strong {
        padding-right: 5px;
    }
`;

export const BodyInfoSheet = styled.div``;

export const BodyDescriptionInfoSheet = styled.div`
    padding: 10px;
    background: #d5f7f7;
`;

export const TitleInfoSheet = styled.h4`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    color: #fff;
    background: #008080;
`;
