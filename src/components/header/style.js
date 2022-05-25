import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed;

    width: calc(100vw - 2*10%);
    padding: 1rem 10%;
    background-color: #6713d2;
    color: var(--font-color);

    box-shadow: 0 2px 5px 0px rgba(0,0,0,0.5);
`;

export const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const MenuList = styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const UserAndSearchMenu = styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;
`;