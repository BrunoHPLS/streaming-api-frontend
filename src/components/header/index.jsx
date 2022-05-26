import React from 'react';
import * as style from "./style";
import Logo from '../Logo';
import UserMenu from '../UserMenu';


function header() {
  return (
    <style.HeaderContainer>
        <style.Navbar>
            <style.MenuList>
                <li><Logo margin link="http://www.google.com.br"/></li>
                <li><style.MenuLink>Item 1</style.MenuLink></li>
                <li><style.MenuLink>Item 2</style.MenuLink></li>
            </style.MenuList>
            <style.UserAndSearchMenu>
                <li>
                    <style.SearchForm>
                        <style.SearchLabel for="search">search</style.SearchLabel>
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