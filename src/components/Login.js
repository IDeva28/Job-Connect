import styled from "styled-components";
import logo from "../images/login-logo.svg";
import hero from "../images/meet-svg.svg";
import google from "../images/google.svg";

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

      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src={hero} alt="" />
        </Hero>
        <Form>
          <Google>
            <img src={google} alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
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

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  /* background-color: bisque; */
  @media (max-width: 768px) {
    min-height: 0px;
    justify-content: center;
    align-items: center;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2f2e41;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    /* z-index: -1; */
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: 50px;
    right: -100px;
    @media (max-width: 768px) {
      margin-top: 20px;
      width: 100%;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 200px;
  width: 400px;

  @media (max-width: 768px) {
    margin-top: 20px;
  } ;
`;
const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 100%;
  background-color: #fff;
  border-radius: 28px;
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

export default Login;
