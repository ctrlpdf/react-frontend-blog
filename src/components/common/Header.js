import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  background: black;
  position: fixed;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0);
`;

const Wrapper = styled(Responsive)`
  background: green;
  height: 4rem;
  dispaly: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    background: red;
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    background: blue;
    display: flex;
    align-items: center;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const Header = ({ user }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            LOGO
          </Link>
          {user ? (
            <div className="right">
              <UserInfo>{user.username}</UserInfo>
              <Button>Logout</Button>
            </div>
          ) : (
            <div className="right">
              <Button to="/login">Login</Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
