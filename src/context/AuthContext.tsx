import React, { createContext, useState, useEffect, ReactNode } from "react";
import { getUserNameFromToken } from "../utils/tokenUtils";

// Define uma interface para o contexto de autenticação
interface AuthContextType {
  isLogged: boolean;
  role: "ALUNO" | "PROFESSOR" | null;
  token: string | null;
  login: (token: string, role: "ALUNO" | "PROFESSOR", expiresIn: number) => void;
  logout: () => void;
}

// Cria o contexto de autenticação
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provedor de autenticação
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLogged, setIsLogged] = useState<boolean>(() => {
        const storedLogged = localStorage.getItem("isLogged");
        return storedLogged === "true";
      });
    
      const [role, setRole] = useState<"ALUNO" | "PROFESSOR" | null>(() => {
        // Carrega a role do localStorage
        return localStorage.getItem("role") as "ALUNO" | "PROFESSOR" | null;
      });
  const [token, setToken] = useState<string | null>(null);

  // Função para logar o usuário
  const login = (token: string, userRole: "ALUNO" | "PROFESSOR", expiresIn: number) => {
    setIsLogged(true);
    setRole(userRole);
    setToken(token);

    localStorage.setItem("isLogged", "true");
    localStorage.setItem("role", userRole);
    localStorage.setItem("token", token);
    localStorage.setItem("name", getUserNameFromToken(token)!);

    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    localStorage.setItem("tokenExpiration", expirationDate.toISOString());
    setTimeout(logout, expiresIn * 1000);
  };

  // Função para deslogar o usuário
  const logout = () => {
    setIsLogged(false);
    setRole(null);
    setToken(null);

    // Remove os dados do localStorage
    localStorage.removeItem("isLogged");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiration");
    localStorage.removeItem("name");
  };

  // Verifica se o usuário está logado ao carregar o aplicativo
  useEffect(() => {
    const storedIsLogged = localStorage.getItem("isLogged") === "true";
    const storedRole = localStorage.getItem("role") as "ALUNO" | "PROFESSOR" | null;
    const storedToken = localStorage.getItem("token");
    const tokenExpiration = localStorage.getItem("tokenExpiration");

    if (storedIsLogged && storedToken && storedRole && tokenExpiration) {
      const expirationDate = new Date(tokenExpiration);

      // Verifica se o token ainda é válido
      if (expirationDate > new Date()) {
        setIsLogged(true);
        setRole(storedRole);
        setToken(storedToken);

        // Configura o timeout para deslogar quando o token expirar
        const timeRemaining = expirationDate.getTime() - new Date().getTime();
        setTimeout(logout, timeRemaining);
      } else {
        logout(); // Se o token expirou, desloga
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLogged, role, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
