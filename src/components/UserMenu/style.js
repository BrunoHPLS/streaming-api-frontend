import styled from 'styled-components';

export const UserContainer = styled.div`
    position: relative;

    & div:hover ~ nav{
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
    top: calc(100% + 0.5rem);
    right: 0;
    background-color: #393E46;
    width: 11rem;
    padding: 0.5rem;
    box-sizing: border-box;
    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    transform-origin: top right;
    transform: scale(0);
    transition: all 0.25s ease-in-out;

    &::before{
        position: absolute;
        top: -6px;
        right: 10px;
        content:"";
        width: 0.4rem; 
        height: 0.4rem; 
        border-top: 6px solid #393E46;
        border-left: 6px solid #393E46;
        transform: rotate(45deg);
        background: inherit;
    }

    &:hover{
        transform: scale(1);
    }

    
`;

export const UserMenuList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    ${({noBorder})=>(noBorder) ? "":"border-top: 1px solid;padding-top: 0.5rem;"}
`;

export const UserMenuItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    &:hover{
        color: #FFF;
    }
`;

export const UserMenuLink = styled.a`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    
    ${({center})=>(center)? "align-self: center;":""}

    ${({icon})=>(icon) ? `
    font-size: 0.9rem;
    font-weight: 700;
    &::before{
        color: inherit;
        font-size: 1.5rem;
        font-weight: 500;
        font-family: 'Material Icons';
        content: "${icon}";
    }`:""}
`

export const LoggedPerfilInfo = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    padding: 0.35rem 0.5rem;
    border-radius: 0.25rem;
    background-color: #222831;

    &::before{
        opacity: 0.8;
        font-size: 0.75rem;
        content: "Perfil Atual:";
    }
`;

export const ChangePerfilLink = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.5rem;
    border-radius: 0.5rem;
    background-color: #73777B50;

    &::before{
        content: "";
        width: 2rem;
        height: 2rem;
        border-radius: 0.75rem;
        background-color: #222831;

        transition: all 0.25s ease-in-out;
    }

    &:hover::before {
        border-radius: 0.5rem;
    }
`;