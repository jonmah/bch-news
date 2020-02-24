import React from 'react';

import {
  StoryMeta,
  StoryMetaElement,
  StoryTitle,
  StoryWrapper
} from '../../styles/Story';

const Story = ({ by, link, time, title }) => (
  <StoryWrapper>
    <StoryTitle>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </StoryTitle>
    <StoryMeta>
      <span>
        <StoryMetaElement highlight>By:</StoryMetaElement> {by}
      </span>
    </StoryMeta>
    <StoryMeta>
      <span>
        <StoryMetaElement highlight>Posted:</StoryMetaElement> {time}
      </span>
    </StoryMeta>
  </StoryWrapper>
);

export default Story;
