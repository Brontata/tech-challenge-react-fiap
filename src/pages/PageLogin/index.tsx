import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../hooks/useAuth';

// Styled components
const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  height: 400px;
  background-color: #ffffff;
  margin-bottom: 20px;
  margin-right: 250px;
`;

const LoginForm = styled.form`
  background-color: #e0e0e0;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const InputField = styled.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const SignupLink = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;

  a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #0056b3;
    }
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  text-align: center;
`;

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
 const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const loginResponse = await loginApi({ email, password });
    
      if (loginResponse.token) {
        login(loginResponse.token, loginResponse.role, 3600);
        sessionStorage.setItem('token', loginResponse.token);
        navigate('/');
      } else {
        setError('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Ocorreu um erro no login');
    }
  };

  // Função para enviar os dados para a API real de login
  const loginApi = async (credentials: { email: string; password: string }) => {
    const response = await fetch('http://localhost:3333/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Erro ao fazer login');
    }
    
    return response.json(); // Retorna o token e outros dados recebidos da API
  };

  return (
    <LoginPageContainer>
      <LoginForm onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <SubmitButton type="submit">Entrar</SubmitButton>
        <SubmitButton style={{ marginTop: '1rem' }} onClick={() => navigate('/')}>Voltar</SubmitButton>
        <SignupLink>
          Não tem uma conta? <Link to="/register">Cadastre-se</Link>
        </SignupLink>
      </LoginForm>
    </LoginPageContainer>
  );
};

export default LoginPage;
