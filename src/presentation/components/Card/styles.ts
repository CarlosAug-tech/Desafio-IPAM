import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 600px;
    width: 100%;
    padding: 20px;
    margin: 40px 10px;
    border-radius: 4px;
    position: relative;
    background: #fff;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
        0 1px 5px 0 rgb(0 0 0 / 20%);

    > div,
    h3 {
        width: 100%;
    }

    > div {
        margin-bottom: 10px;
    }

    strong {
        padding-right: 5px;
    }
`;

export const TitleCard = styled.h3`
    text-align: center;
    font-size: 26px;
    margin-bottom: 20px;
`;

export const ToolsCard = styled.div`
    width: unset !important;
    right: -10px;
    top: -10px;
    position: absolute;

    > button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px !important;
        height: 40px;
        border-radius: 50%;
        position: relative;
        color: #fff;
        background: #008080;
        box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%),
            0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);

        > div {
            opacity: 0;
            visibility: hidden;
        }

        &:hover {
            > div {
                opacity: 1;
                visibility: visible;
            }
        }
    }

    > svg {
    }
`;

export const SubTitleCard = styled.h4`
    width: 100%;
    position: relative;
    text-align: center;
    font-size: 18px;

    &::before,
    &::after {
        content: '';
        width: 20%;
        height: 2px;
        padding: 0 10px;
        top: 50%;
        position: absolute;
        background: #333;
    }

    &::before {
        left: 15%;
    }

    &::after {
        right: 15%;
    }
`;

export const SubInfoCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    svg {
        padding-right: 5px;
    }
`;

export const SubInfoTextCard = styled.span`
    font-size: 16px;
`;
