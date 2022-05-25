import styled from 'styled-components';

export const Logo = styled.a`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-right: ${({margin})=> (margin ? "2":"0")}rem;
    color: var(--font-color);

    &:hover :nth-child(1){
        color: #cbcbcb;
    }

    &:hover :nth-child(2){
        color: #cbcbcb;
    }
`;

export const LogoTitle = styled.span`
    font-size: 1.75rem;
    font-family: 'Amaranth';
    font-size: 700;
    transition: all 0.25s linear;
`;

export const LogoSubtitle = styled.span`
    letter-spacing: 4px;
    font-size: 0.85rem;
    transition: all 0.25s linear;
`;