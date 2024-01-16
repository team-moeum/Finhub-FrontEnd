import styled from "@emotion/styled";

export const ButtonContiner = styled.div`
    .text {
        background: transparent;
        color: #000;
    };
    .contained {
        background: #0064FF;
        color: #FFF;
    };
    .outlined {
        background: transparent;
        border: 1px solid #0064FF;
        color: #1677FF;
    };
`

export const ButtonWrap = styled.button<{
    disabled?: boolean; 
    animate?: boolean
    }>`

    overflow: hidden;
    outline: none;
    position: relative;
    cursor: pointer;

    border-radius: 10px;
    border: none;
    box-shadow: none;

    &:disabled {
        background: #eee !important;
        color: #999 !important;
        border: none !important;
    }

    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    ${({ animate }) => animate && ButtonAnimation}
`;

export const ButtonDivWrap = styled.div<{disabled?: boolean; animate?: boolean}>`
    overflow: hidden;
    outline: none;
    position: relative;
    cursor: pointer;
    user-select:none;

    border-radius: 10px;
    border: none;
    box-shadow: none;

    ${({ disabled }) => disabled && `
        background: #eee !important;
        color: #999 !important;
        border: none !important;
        cursor: default !important;
        pointer-events: none !important;
    `}

    ${({ animate }) => animate && ButtonAnimation}
`;

export const ButtonAnimation = `
    transition: all 0.2s ease;
    &:active {
        transform: scale3d(0.97, 0.95, 1);
    }
`;