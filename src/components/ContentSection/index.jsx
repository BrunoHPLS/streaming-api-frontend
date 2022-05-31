import React,{useRef} from 'react';
import * as style from './style';
import Content from '../Content';

function ContentSection({sectionName}) {

  const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

  const carousel = useRef(null);

  const handleLeftClick = (e) =>{
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = (e) =>{
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (
      <style.SectionContainer>
        <style.SectionTitle href="#">{sectionName}</style.SectionTitle>
        <style.ChangeBtn onClick={handleLeftClick}>chevron_left</style.ChangeBtn>
        <style.ChangeBtn onClick={handleRightClick} right>chevron_right</style.ChangeBtn>
        <style.ContentList ref={carousel}>
          {data.map((item,index)=>{
            return (
              <Content key={index}>{item}</Content>
            );
          })}
        </style.ContentList>
      </style.SectionContainer>
  );
}

export default ContentSection;