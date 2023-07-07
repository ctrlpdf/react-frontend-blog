import React from 'react';
import styled from 'styled-components';
// import palette from '../../lib/styles/palette';

const TagBoxBlock = styled.div`
  border: 1px solid red;
`;

const TagForm = styled.form`
  border: 1px solid blue;
`;

const Tag = styled.div`
  border: 1px solid green;
`;

const TagListBlock = styled.div`
  border: 3px solid violet;
`;

const TagItem = React.memo(({ tag }) => <Tag>#{tag}</Tag>);

const TagList = React.memo(({ tags }) => (
  <TagListBlock>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} />
    ))}
  </TagListBlock>
));

const TagBox = () => {
  return (
    <TagBoxBlock>
      <h4>Tags</h4>
      <TagForm>
        <input placeholder="Input tag" />
        <button type="submit">Add</button>
      </TagForm>
      <TagList tags={['Tag1', 'Tag2', 'Tag3']} />
    </TagBoxBlock>
  );
};

export default TagBox;
