import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const TagBoxBlock = styled(Responsive)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-top: 10px;
`;

const TagForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Tag = styled.div`
  display: inline-block;
  color: #495057;
  text-decoration: none;
  margin-right: 3px;
  font-size: 14px;
  &:hover {
    color: #adb5bd;
  }
`;

const TagListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
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

const TagBox = ({ tags, onChangeTags }) => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);

  const insertTag = useCallback(
    (tag) => {
      if (!tag) return;
      if (localTags.includes(tag)) return;
      const nextTags = [...localTags, tag];
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags],
  );
  const onRemove = useCallback(
    (tag) => {
      const nextTags = localTags.filter((t) => t !== tag);
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags],
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

  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);

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
