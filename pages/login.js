import styled from "styled-components";
import Head from "next/head";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

const login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo src="https://i.pinimg.com/originals/f7/5d/94/f75d94874d855a7fcfcc922d89ac5e80.png" />
        <Button onClick={signIn} variant="outlined">
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  );
};

export default login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const LoginContainer = styled.div`
  padding: 50px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  height: 200px;
  width: auto;
  margin-bottom: 50px;
`;
