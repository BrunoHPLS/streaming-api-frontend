import React from 'react';

import * as style from './style';

function EmDestaqueSection() {
  return (
    <style.SectionContainer>
      <style.ContentDiv>
          <style.ContentTitle>Titulo</style.ContentTitle>
          <style.ContentDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat nulla ut eleifend vehicula. Donec quis ligula id lectus vehicula imperdiet sed id lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus pulvinar, eros non ultrices pharetra, nunc enim suscipit leo, sed pulvinar eros nunc in justo. Vestibulum ut ullamcorper dolor. Fusce luctus lorem sed odio egestas tincidunt. Maecenas ac vulputate leo. Donec vitae mi bibendum, accumsan magna a, dapibus ligula.</style.ContentDescription>
          <style.ContentWatchLink href="#">Assistir</style.ContentWatchLink>
          <style.ContentInfoLink href="#">Mais Informações</style.ContentInfoLink>
      </style.ContentDiv>
    </style.SectionContainer>
  );
}

export default EmDestaqueSection;