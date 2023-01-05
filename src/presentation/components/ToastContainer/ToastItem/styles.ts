import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

interface ITotastPopUpProps {
    type: 'success' | 'error';
}

const toastTypeVariations = {
    success: css`
        color: #2e656a;
        background: #e6fffa;
    `,
    error: css`
        color: #c53030;
        background: #fddede;
    `,
};

export const ToastPopUp = styled(animated.div)<ITotastPopUpProps>`
    display: flex;
    align-items: center;
    padding: 20px 10px;
    border-radius: 4px;
    position: relative;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
        0 1px 5px 0 rgb(0 0 0 / 20%);
    ${(props) => toastTypeVariations[props.type]}

    & + div {
        margin-top: 10px;
    }

    > svg {
        margin-right: 5px;
        font-size: 18px;
    }

    ${(props) =>
        props.type === 'success'
            ? css`
                  > button {
                      > svg {
                          color: #2e656a;
                      }
                  }
              `
            : css`
                  > button {
                      > svg {
                          color: #c53030;
                      }
                  }
              `}
`;

export const ClosePopUp = styled.button`
    top: 5px;
    right: 5px;
    position: absolute;
    border: 0;
    background: transparent;
`;
