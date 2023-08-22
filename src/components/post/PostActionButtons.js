import styled from 'styled-components';

const PostActionButtonsBlock = styled.div``;

const ActionButton = styled.button``;

const PostActionButtons = ({ onEdit }) => {
  return (
    <PostActionButtonsBlock>
      <ActionButton onClick={onEdit}>Edit</ActionButton>
      <ActionButton>Remove</ActionButton>
    </PostActionButtonsBlock>
  );
};

export default PostActionButtons;
