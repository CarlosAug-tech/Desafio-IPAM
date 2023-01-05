import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 250px;
    width: 100%;
    height: 300px;
    padding: 15px;
    margin: 20px;
    position: relative;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
        0 1px 5px 0 rgb(0 0 0 / 20%);
`;

export const ToolsMiniCard = styled.div`
    top: 10px;
    right: 10px;
    position: absolute;

    > button {
        position: relative;

        > svg {
            color: #e91818;
        }

        > div {
            visibility: hidden;
            opacity: 0;
        }

        &:hover > div {
            visibility: visible;
            opacity: 1;
        }
    }
`;

export const HeaderMiniCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px 0;
`;

export const TitleMiniCard = styled.h3`
    color: #333;
    font-size: 16px;
`;

export const BodyMiniCard = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: calc(100% - 80px);
`;

export const BodyTitleMiniCard = styled.h4`
    text-align: center;
    font-size: 16px;
    color: #fff;
    background: #008080;
`;

export const BodyDescriptionMiniCard = styled.div`
    width: 100%;
    padding: 5px;
    background: #d5f7f7;
`;

export const FooterMiniCard = styled.div`
    display: flex;
    align-self: flex-end;
    justify-content: center;
    width: 100%;
    height: 30px;
    margin-top: 10px;

    > button {
        display: flex;
        align-items: center;
        margin-left: auto;
        padding: 5px 10px;
        border-radius: 4px;
        color: #fff;
        background: #008080;
        transition: all 0.4s ease;

        &:hover {
            color: #e1d6d6;
            background: #0a6e6e;
        }
    }
`;

export const ModalContentMiniCard = styled.div`
    padding: 20px 0;
`;
