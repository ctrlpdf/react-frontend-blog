import { useState } from 'react';
import styled from 'styled-components';
import AskRemoveModal from './AskRemoveModal';

const PostActionButtonsBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  background-color: #f8f9fa;
  border-radius: 4px;
  padding: 0.5rem;
`;

const ActionButton = styled.button`
  background-color: #20c997;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.25rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #38d9a9;
  }
  & + & {
    margin-left: 0.5rem;
  }
`;

const PostActionButtons = ({ onEdit, onRemove }) => {
  const [modal, setModal] = useState(false);
  const onRemoveClick = () => {
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = () => {
    setModal(false);
    onRemove();
  };
  return (
    <>
      <PostActionButtonsBlock>
        <ActionButton onClick={onEdit}>Edit</ActionButton>
        <ActionButton onClick={onRemoveClick}>Remove</ActionButton>
      </PostActionButtonsBlock>
      <AskRemoveModal
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
};

export default PostActionButtons;
