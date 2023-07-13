import styled from 'styled-components';
// import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const PostViewerBlock = styled(Responsive)`
  border: 1px solid red;
`;

const PostHead = styled.div`
  border: 1px solid blue;
`;

const SubInfo = styled.div`
  border: 1px solid green;
`;

const Tags = styled.div`
  border: 1px solid violet;
`;

const PostContent = styled.div`
  border: 1px solid pink;
`;

const PostViewer = ({ post, error, loading }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>There is no post.</PostViewerBlock>;
    }
    return <PostViewerBlock>Error</PostViewerBlock>;
  }

  if (loading || !post) {
    return null;
  }

  const { title, body, user, publishedDate, tags } = { post };

  return (
    <PostViewerBlock>
      <PostHead>
        <h1>{title}</h1>
        <SubInfo>
          <span>
            <b>{user.username}</b>
          </span>
          <span>{new Date(publishedDate).toLocaleDateString()}</span>
        </SubInfo>
        <Tags>
          {tags.map((tag) => (
            <div className="tag">#{tag}</div>
          ))}
        </Tags>
      </PostHead>
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </PostViewerBlock>
  );
};

export default PostViewer;
