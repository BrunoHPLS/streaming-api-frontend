import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed;

    width: calc(100vw - 2*12.5%);
    padding: 1rem 12.5%;
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

export const MenuLink = styled.a`
    cursor: pointer;
    font-size: 1.25rem;

    &:hover{
        color: #ccc;
    }
`

export const UserAndSearchMenu = styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;
`;
export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    padding: 0.25rem;
    border-radius: 0.25rem;
    background-color: #441290;
`

export const SearchLabel = styled.label`
    font-size: 1.5rem;
    font-family: 'Material Icons';
`

export const SearchArea = styled.input`
    outline: none;
    background-color: transparent;
    border: none;
    padding: 0px;
    margin: 0px;
    font-size: 1rem;
    font-weight: 700;
    width: 0px;
    color: inherit;
    
    transition: all 0.3s ease-in-out;

    &:focus {
        padding-left: 0.25rem;
        width: 200px;
    }
`;
