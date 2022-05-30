import React from 'react';
import * as style from './style';

function ContentSection({sectionName}) {
  return (
      <style.SectionContainer>
        <style.SectionTitle href="#">{sectionName}</style.SectionTitle>
        <style.ContentList>
          <style.Content></style.Content>
          <style.Content></style.Content>
          <style.Content></style.Content>
          <style.Content></style.Content>
          <style.Content></style.Content>
          <style.Content></style.Content>
          <style.Content></style.Content>
        </style.ContentList>
      </style.SectionContainer>
  );
}

export default ContentSection;