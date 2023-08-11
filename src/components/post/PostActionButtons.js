import styled from 'styled-components';

const PostActionButtonsBlock = styled.div``;

const ActionButton = styled.button``;

const PostActionButtons = () => {
  return (
    <PostActionButtonsBlock>
      <ActionButton>Edit</ActionButton>
      <ActionButton>Remove</ActionButton>
    </PostActionButtonsBlock>
  );
};

export default PostActionButtons;
