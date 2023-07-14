import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

const PostListBlock = styled(Responsive)``;

const WritePostButtonWrapper = styled.div``;

const PostItemBlock = styled.div``;

const PostItem = () => {
  return (
    <PostItemBlock>
      <h2>title</h2>
      <SubInfo username="username" publishedDate={new Date()} />
      <Tags tags={['tag1', 'tag2', 'tag3']} />
      <p>contents...</p>
    </PostItemBlock>
  );
};

const PostList = () => {
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        <Button cyan={true} to="/write">
          New
        </Button>
      </WritePostButtonWrapper>
      <div>
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </PostListBlock>
  );
};

export default PostList;
