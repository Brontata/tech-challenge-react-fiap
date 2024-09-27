import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../hooks/useAuth';

// Estilizando o Navbar usando styled-components
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button<{ primary?: boolean }>`
  margin-left: 10px;
  padding: 0.5rem 1rem;
  background-color: ${(props) => (props.primary ? '#007bff' : 'transparent')};
  color: ${(props) => (props.primary ? 'white' : '#007bff')};
  border: ${(props) => (props.primary ? 'none' : '1px solid #007bff')};
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.primary ? '#0056b3' : '#007bff')};
    color: white;
  }
`;

const Username = styled.span`
  margin-right: 10px;
`;

const Navbar: React.FC = () => {
  
  const [username, setUsername] = useState<string>(''); // Simulando o nome do usuário logado
  const { isLogged, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setUsername('Visitante');
    // Aqui você pode limpar o token de autenticação ou fazer logout na API
  };

  useEffect(() => {
    setUsername(localStorage.getItem('name') || 'Visitante');
  })

  return (
    <NavbarContainer >
      <ul className='navbar-nav' style={{'alignItems': 'flex-end', 'display': isLogged ? 'block' : 'none'}}>
        <li className='nav-item'>
          <a href="#" className='nav-link' data-widget="pushmenu" role="button">
            <i className='fas fa-bars'></i>
          </a>
        </li>
      </ul>
      <Title> XPTO Educação</Title>
      <ButtonGroup>
        {isLogged ? (
          <>
            <Username>Bem-vindo, {username}!</Username>
            <Button primary onClick={handleLogout}>Sair</Button>
          </>
        ) : (
          <>
            <Button onClick={() => window.location.href = '/login'}>Login</Button>
            <Button onClick={() => window.location.href = '/register'}>Criar Conta</Button>
          </>
        )}
      </ButtonGroup>
    </NavbarContainer>
  );
};

export default Navbar;
