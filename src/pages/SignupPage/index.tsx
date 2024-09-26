import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const SignupPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 370px;
  background-color: #ffffff;
  margin-bottom: 20px;
  margin-top: 50px;
  margin-right: 250px;
`;

const SignupForm = styled.form`
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

const RoleField = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
`;

const RadioLabel = styled.label`
  font-size: 1rem;
  cursor: pointer;

  input {
    margin-right: 0.5rem;
  }
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

const SignupPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [role, setRole] = useState<'aluno' | 'professor'>('aluno');
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const signupResponse = await fetch('http://localhost:3333/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, role }),
      });
  
      if (!signupResponse.ok) {
        throw new Error('Erro ao cadastrar usuário');
      }
  
      const responseData = await signupResponse.json();
      console.log('Cadastro bem-sucedido', responseData);
  
      navigate('/login'); // Redireciona para a página de login após cadastro bem-sucedido
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
    }
  };

  return (
    <SignupPageContainer>
      <SignupForm onSubmit={handleSignup}>
        <h2>Cadastrar</h2>
        <InputField
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <RoleField>
          <RadioLabel>
            <input
              type="radio"
              value="aluno"
              checked={role === 'aluno'}
              onChange={() => setRole('aluno')}
            />
            Aluno
          </RadioLabel>
          <RadioLabel>
            <input
              type="radio"
              value="professor"
              checked={role === 'professor'}
              onChange={() => setRole('professor')}
            />
            Professor
          </RadioLabel>
        </RoleField>
        <SubmitButton type="submit">Cadastrar</SubmitButton>
        <SubmitButton style={{ marginTop: '1rem' }}  onClick={() => window.location.href = '/'}>Voltar</SubmitButton>
      </SignupForm>
    </SignupPageContainer>
  );
};

export default SignupPage;
