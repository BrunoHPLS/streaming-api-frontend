import React,{useState} from 'react';
import * as style from "./style";
import Logo from '../Logo';
import UserMenu from '../UserMenu';


function header() {

    const [active,setActive] = useState(false);

    window.addEventListener('scroll',()=>{
        if(window.scrollY >= 80){
            setActive(true);
        }else{
            setActive(false);
        }
    });

  return (
    <style.HeaderContainer header={active}>
        <style.Navbar>
            <style.MenuList>
                <li><Logo margin link=""/></li>
                <li><style.MenuLink>Filmes</style.MenuLink></li>
                <li><style.MenuLink>Séries</style.MenuLink></li>
                <li><style.MenuLink>Documentários</style.MenuLink></li>
                <li><style.MenuLink>Lives</style.MenuLink></li>
            </style.MenuList>
            <style.UserAndSearchMenu>
                <li>
                    <style.SearchForm>
                        <style.SearchLabel htmlFor="search">search</style.SearchLabel>
                        <style.SearchArea id="search" name="title" autoComplete="off"/>
                    </style.SearchForm>
                </li>
                <li>
                    <UserMenu/>
                </li>
            </style.UserAndSearchMenu>
        </style.Navbar>
    </style.HeaderContainer>
    );
}

export default header;