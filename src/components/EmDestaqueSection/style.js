import styled from 'styled-components';

export const SectionContainer = styled.section`
    width: 100%;
    height: 90vh;
    box-sizing: border-box;
    box-shadow: inset 0px -20px 100px -20px rgba(0,0,0,1);
    background-image: url("https://wallpaperaccess.com/full/825393.jpg");
    background-size: cover;
    
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 12rem 10rem;
    color: var(--font-color);
`;

export const ContentDiv = styled.div`
    min-width: 32rem;
    min-height: 10rem;
    max-width: 32rem;
    background-color: rgba(0,0,0,0.15);
    padding: 1rem;
    border-radius: 0.5rem;
    display: grid;

    grid-template-areas: 
    "title title" 
    "description description"  
    "watchBtn infoBtn";

    column-gap: 1rem;
    row-gap: 0.75rem;

    &:hover{
        background-color: rgba(0,0,0,0.25);
    }

    &:hover  h4, :hover h1{
        color: #f5f5f5;
    }
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
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    
`;

export const ContentWatchLink = styled.a`
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

    &:hover{
        color: #fff;
        background-image: linear-gradient(135deg, #556dd7 0%, #653a71 100%);
    }
`;

export const ContentInfoLink = styled.a`
    padding: 0.4rem 0.5rem;
    background-color: rgba(0,0,0,0.35);
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

    &:hover{
        color: #fff;
        background-color: rgba(0,0,0,0.5);
    }
`;