import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const Content = styled.a`
    min-width: 18rem;
    height: 10rem;
    box-sizing: border-box;
    border-radius: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);

    &:hover ~ div{
        transform: scale(1);
    }
`;

export const ExpandedContent = styled.div`
    position: absolute;
    z-index: 1;
    width: 24rem;
    height: 30rem;
    top: -50%;
    
    background-color: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    border-radius: 0.5rem;
    transform: scale(0);
    transition: all 0.5s ease-in-out;

    &:hover{
        z-index: 5;
        transform: scale(1);
    }
`;