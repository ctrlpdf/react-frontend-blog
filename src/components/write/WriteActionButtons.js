import styled from 'styled-components';
import Button from '../common/Button';

const WriteActionButtonsBlock = styled.div`
  border: 1px solid red;
`;

const StyledButton = styled(Button)``;

const WriteActionButtons = ({ onCancel, onPublish }) => {
  return (
    <WriteActionButtonsBlock>
      <StyledButton cyan="true" onClick={onPublish}>
        Publish
      </StyledButton>
      <StyledButton onClick={onCancel}>Cancel</StyledButton>
    </WriteActionButtonsBlock>
  );
};

export default WriteActionButtons;
