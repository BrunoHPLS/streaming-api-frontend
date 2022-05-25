import React from 'react';
import * as style from  './style';

function Logo({margin,link}) {
  return (
    <style.Logo margin={margin} href={link}>
        <style.LogoTitle>STREAMING</style.LogoTitle>
        <style.LogoSubtitle>PLATFORM</style.LogoSubtitle>
    </style.Logo>
    );
}

export default Logo;