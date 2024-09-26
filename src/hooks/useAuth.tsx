import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Hook personalizado para usar o AuthContext
export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }

  return authContext; // Retorna o contexto de autenticação
};
