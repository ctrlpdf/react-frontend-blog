import React, { useState, useCallback } from 'react';
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

const TagItem = React.memo(({ tag, onRemove }) => (
  <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
));

const TagList = React.memo(({ tags, onRemove }) => (
  <TagListBlock>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListBlock>
));

const TagBox = () => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);

  const insertTag = useCallback(
    (tag) => {
      if (!tag) return;
      if (localTags.includes(tag)) return;
      setLocalTags([...localTags, tag]);
    },
    [localTags],
  );
  const onRemove = useCallback(
    (tag) => {
      setLocalTags(localTags.filter((t) => t !== tag));
    },
    [localTags],
  );
  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      insertTag(input.trim());
      setInput('');
    },
    [input, insertTag],
  );

  return (
    <TagBoxBlock>
      <h4>Tags</h4>
      <TagForm onSubmit={onSubmit}>
        <input placeholder="Input tag" value={input} onChange={onChange} />
        <button type="submit">Add</button>
      </TagForm>
      <TagList tags={localTags} onRemove={onRemove} />
    </TagBoxBlock>
  );
};

export default TagBox;
