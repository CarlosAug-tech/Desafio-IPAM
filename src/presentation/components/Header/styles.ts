import styled from 'styled-components';

export const Container = styled.header`
    z-index: 10;
    width: 100%;
    padding: 0 20px;
    top: 0;
    position: fixed;
    background: #008080;
`;

export const NavHeader = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    height: 80px;
    margin: auto;
`;

export const LogoHeader = styled.div`
    > a {
        font-size: 18px;
        font-weight: 700;
        color: #fff;
    }
`;

export const ListHeader = styled.ul`
    display: flex;
    align-items: center;
`;

export const ListItem = styled.li`
    & + li {
        margin-left: 5px;
        padding-left: 5px;
        border-left: 1px solid #fff;
    }

    a {
        position: relative;
        color: #fff;
        transition: all 0.4s ease;

        &::after {
            content: '';
            width: 0;
            height: 1px;
            left: 50%;
            bottom: 1px;
            position: absolute;
            background: #fff;
            transform: translateX(-50%);
            transition: all 0.4s ease;
        }

        &:hover {
            color: #e1d6d6;

            &::after {
                width: 100%;
            }
        }
    }
`;
