import React from 'react';
import * as style from "./style";
import Logo from '../Logo';


function header() {
  return (
    <style.HeaderContainer>
        <style.Navbar>
            <style.MenuList>
                <li><Logo margin link="http://www.google.com.br"/></li>
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </style.MenuList>
            <style.UserAndSearchMenu>
                <p>A</p>
                <p>B</p>
                <p>C</p>
            </style.UserAndSearchMenu>
        </style.Navbar>
    </style.HeaderContainer>
    );
}

export default header;