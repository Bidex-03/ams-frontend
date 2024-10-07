import { useState } from "react";
import { Button } from "../ui/Button";
import styled from "styled-components";
import { useLogin } from "../services/useLogin";
import SpinnerMini from "../ui/SpinnerMini";

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--background-color);
`;

const Form = styled.form`
  background-color: var(--background-color);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px var(--black-color);
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--secondary-color);
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: var(--text-color);
`;

const SignIn = () => {
  const [email, setEmail] = useState("abdullahqaasim14@gmail.com");
  const [password, setPassword] = useState("Abdullah01");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }

  return (
    <SignInContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Sign In</Title>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={isLoading}
        />
        {/* <Button type="submit" disabled={isLoading}> */}
        <Button type="submit">
          {!isLoading ? "Sign in" : <SpinnerMini />}
        </Button>
      </Form>
    </SignInContainer>
  );
};

export default SignIn;
