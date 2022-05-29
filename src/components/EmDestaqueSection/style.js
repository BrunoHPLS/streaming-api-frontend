import styled from 'styled-components';

export const SectionContainer = styled.section`
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    box-shadow: inset 0px -1px 50px -1px rgba(0,0,0,0.5);
    
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 7.5rem 10rem;
    color: var(--font-color);
`;

export const ContentDiv = styled.div`
    min-width: 30rem;
    min-height: 8rem;
    max-width: 30rem;
    background-color: rgba(0, 0,0,0.5);

    display: grid;

    grid-template-areas: 
    "title title" 
    "description description"  
    "watchBtn infoBtn";

    row-gap: 0.5rem;
`;

export const ContentTitle = styled.h1`
    grid-area: title;
    font-size: 2.5rem;
    font-weight: 700;
`;

export const ContentDescription = styled.h4`
    grid-area: description;
    line-height: 1.3rem;
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.5);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    
`;

export const ContentWatchLink = styled.a`
    background-color: red;
    grid-area: watchBtn;
    font-size: 1.5rem;
    padding: 0.4rem 0.5rem;
    padding-right: 1rem;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    &::before{
        font-family:'Material Icons';
        font-size: 1.8rem;
        content: 'play_arrow';
    }
`;

export const ContentInfoLink = styled.a`
    padding: 0.4rem 0.5rem;
    background-color: blue;
    grid-area: infoBtn;
    font-size: 1.5rem;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    &::before{
        font-family:'Material Icons';
        font-size: 1.8rem;
        content: 'info';
    }
`;