import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface ProtectedRouteProps {
  children: JSX.Element;
  requiredRole: "PROFESSOR"; // Define o papel necessário para acessar a rota
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
    const { isLogged, role } = useAuth();

  if (!isLogged) {
    return <Navigate to="/login" />;
  }

  if (role !== requiredRole) {
    return <Navigate to="/" />; // Redireciona para a página inicial ou exibe uma mensagem de erro
  }

  return children;
};

export default ProtectedRoute;
