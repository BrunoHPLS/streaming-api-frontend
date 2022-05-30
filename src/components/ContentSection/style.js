import styled from 'styled-components';

export const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    box-sizing: border-box;
    padding: 0.5rem 10rem;
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
`;

export const Content = styled.a`
    min-width: 18rem;
    height: 10rem;
    box-sizing: border-box;
    border-radius: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
`;