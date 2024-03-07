import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SubInfoBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  span + span:before {
    color: rgba(0, 0, 0, 0.8);
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
`;

const SubInfo = ({ username, publishedDate, hasMarginTop }) => {
  return (
    <SubInfoBlock hasMarginTop={hasMarginTop}>
      <span>
        <b>
          <Link to={`/@${username}`}>{username}</Link>
        </b>
      </span>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </SubInfoBlock>
  );
};

export default SubInfo;
