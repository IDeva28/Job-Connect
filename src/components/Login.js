import styled from "styled-components";
import logo from "../images/login-logo.svg";

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href="#">
          <img alt="logo" src={logo} />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 10px 16px; //top right bottom left => clockwise
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  transition-duration: 130ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    transition-duration: 167ms;
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 500;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(46, 139, 87, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

export default Login;
