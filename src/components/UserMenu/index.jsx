import React from 'react';
import * as style from './style';

function UserMenu() {
  return (
      <style.UserContainer>
        <style.UserIcon/>
        <style.UserMenu>
          <style.LoggedPerfilInfo>User 1</style.LoggedPerfilInfo>
          <style.UserMenuList noBorder>
            <style.UserMenuItem>
              <style.ChangePerfilLink>User 2</style.ChangePerfilLink>
            </style.UserMenuItem>
            <style.UserMenuItem>
              <style.ChangePerfilLink>User 3</style.ChangePerfilLink>
            </style.UserMenuItem>
            <style.UserMenuItem>
              <style.UserMenuLink href="#" icon="group" >Gerenciar Perfis</style.UserMenuLink>
            </style.UserMenuItem>
          </style.UserMenuList>
          <style.UserMenuList>
            <style.UserMenuItem>
              <style.UserMenuLink href="#" icon="manage_accounts" >Conta</style.UserMenuLink>
            </style.UserMenuItem>
            <style.UserMenuItem>
              <style.UserMenuLink href="#" icon="contact_support" >Central de Ajuda</style.UserMenuLink>
            </style.UserMenuItem>
          </style.UserMenuList>
          <style.UserMenuList>
            <style.UserMenuItem>
              <style.UserMenuLink href="#" icon="logout" center >Sair</style.UserMenuLink>
            </style.UserMenuItem>
          </style.UserMenuList>
        </style.UserMenu>
      </style.UserContainer>
  );
}

export default UserMenu;