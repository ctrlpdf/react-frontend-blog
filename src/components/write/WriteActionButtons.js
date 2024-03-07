import styled from 'styled-components';
import Button from '../common/Button';
import Responsive from '../common/Responsive';

const WriteActionButtonsBlock = styled(Responsive)`
  margin-top: 10px;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 4px;
  margin-right: 10px;
  & > button + button {
    margin-left: 10px;
  }
`;

const StyledButton = styled(Button)``;

const WriteActionButtons = ({ onCancel, onPublish, isEdit }) => {
  return (
    <WriteActionButtonsBlock>
      <StyledButton cyan="true" onClick={onPublish}>
        {isEdit ? 'Update' : 'Publish'}
      </StyledButton>
      <StyledButton onClick={onCancel}>Cancel</StyledButton>
    </WriteActionButtonsBlock>
  );
};

export default WriteActionButtons;
