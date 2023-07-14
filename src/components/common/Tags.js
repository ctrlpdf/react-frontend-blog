import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TagsBlock = styled.div``;

const Tags = ({ tags }) => {
  return (
    <TagsBlock>
      {tags.map((tag) => (
        <Link className="tag" to={`/?tag=${tag}`} key={tag}>
          #{tag}
        </Link>
      ))}
    </TagsBlock>
  );
};

export default Tags;
