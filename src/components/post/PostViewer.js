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

const PostViewer = () => {
  return (
    <PostViewerBlock>
      <PostHead>
        <h1>Title</h1>
        <SubInfo>
          <span>
            <b>test123</b>
          </span>
          <span>{new Date().toLocaleDateString()}</span>
        </SubInfo>
        <Tags>
          <div className="tag">#Tag1</div>
          <div className="tag">#Tag2</div>
          <div className="tag">#Tag3</div>
        </Tags>
      </PostHead>
      <PostContent dangerouslySetInnerHTML={{ __html: '<p>HTML 123</p>' }} />
    </PostViewerBlock>
  );
};

export default PostViewer;
