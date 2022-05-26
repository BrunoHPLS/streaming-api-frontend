import styled from 'styled-components';

export const UserContainer = styled.div`
    position: relative;

    & a:hover ~ nav{
        transform: scale(1);
    }
`;

export const UserIcon = styled.div`
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.45rem;
    
    background-color: #CDCDCD;
    background-size: 100%;
    background-image: url(https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png);
`;

export const UserMenu = styled.nav`
    position: absolute;
    top: calc(100% + 0.45rem);
    right: 0;
    background-color: #ccc;
    width: 10rem;
    height: 20rem;
    border-radius: 0.5rem;
    transform-origin: top right;
    transform: scale(0);
    transition: all 0.3s ease-in-out;

    &::before{
        position: absolute;
        top: -4px;
        right: 8px;
        content:"";
        width: 0.75rem;
        height: 0.75rem;
        transform: rotate(45deg);
        background-color: inherit;
    }

    &:hover{
        transform: scale(1);
    }

    
`;
