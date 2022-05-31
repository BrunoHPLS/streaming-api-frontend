import styled from 'styled-components';

export const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    box-sizing: border-box;
    padding: 0.5rem 10rem;
    position: relative;
`;

export const SectionTitle = styled.a`
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--font-color);
    display: flex;
    align-items: center;
    gap:1rem;

    &::after{
        overflow: hidden;
        white-space: nowrap;
        content: "ver mais";
        font-size: 0.8rem;
        opacity: 0;
        transition: all 0.3s ease-in-out;
    }

    &:hover::after{
        opacity: 1;
    }
`;

export const ContentList = styled.ul`
    display: flex;
    align-items: center;
    gap: 1.25rem;
    overflow-x: auto;
    overflow-y: visible;
    scroll-behavior: smooth;

    &::-webkit-scrollbar{
        display: none;
    }
`;

export const ChangeBtn = styled.button`
    cursor: pointer;
    font-family: 'Material Icons';
    position: absolute;
    z-index: 2;
    font-size: 3rem;
    color: var(--font-color);
    height: 90%;
    width: 4rem;
    border-radius: ${({right})=>right ? "0px 1rem 1rem 0px":"1rem 0px 0px 1rem"};
    top: 2rem;
    ${({right})=>right ? "right":"left"}: 10rem;
    opacity: 0;
    transform: translateX(${({right})=>right ? "1rem":"-1rem"});
    background-image: linear-gradient(${({right})=>right ? "to left":"to right"}, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.0) 100%);
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: translateX(0%);
        opacity: 1;
    }
`;
