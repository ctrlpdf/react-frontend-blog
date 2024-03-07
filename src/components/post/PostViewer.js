import styled from 'styled-components';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import { Helmet } from 'react-helmet-async';

const PostViewerBlock = styled(Responsive)`
  margin-top: 1rem;
  margin-bottom: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
  background-color: #f7f9fc;
`;

const PostHead = styled.div`
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
    color: #4a4a4a;
    font-weight: 600;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.8;
  letter-spacing: 0.05em;
`;

const PostViewer = ({ post, error, loading, actionButtons }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>There is no post.</PostViewerBlock>;
    }
    return <PostViewerBlock>Error</PostViewerBlock>;
  }

  if (loading || !post) {
    return null;
  }

  const { title, body, user, publishedDate, tags } = post;

  return (
    <PostViewerBlock>
      <Helmet>
        <title>{title} - BLOG</title>
      </Helmet>
      <PostHead>
        <h1>{title}</h1>
        <SubInfo
          username={user.username}
          publishedDate={publishedDate}
          hasMarginTop={true}
        />
        <Tags tags={tags} />
      </PostHead>
      {actionButtons}
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </PostViewerBlock>
  );
};

export default PostViewer;
