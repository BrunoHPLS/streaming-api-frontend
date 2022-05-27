import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed;
    width: calc(100vw - 2*12.5%);
    padding: 0.5rem 12.5%;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.0) 100%);
    color: var(--font-color);

    transition: all 0.2s ease-in-out;

    ${({header})=>(header) ? "background-image: none;background-color: #222831;opacity: 0.95;":""}

    &:hover{
        background-image: none;
        background-color: #222831;
        opacity: 1;
    }
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
    font-size: 1rem;

    &:hover{
        color: #FFF;
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
    background-color: #393E46;
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
