import styled from 'styled-components';
import Button from '../common/Button';
import Responsive from '../common/Responsive';

const WriteActionButtonsBlock = styled(Responsive)`
  padding: 1rem;
  display: flex;
  margin-right: 10px;
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
