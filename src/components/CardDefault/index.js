import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink, VideoCardContainer } from './styles';

function CardDefault({categoryTitle, categoryColor, categoryExtraLink}) {

  return (
    <VideoCardGroupContainer>
        <Title style={{ backgroundColor: categoryColor }}>
            {categoryTitle}
        </Title>
        <ExtraLink target="_blank">
            {categoryExtraLink}  
        </ExtraLink>
        <VideoCardContainer style={{ borderColor: categoryColor }}
        />
    </VideoCardGroupContainer>
  )
}

export default CardDefault;
