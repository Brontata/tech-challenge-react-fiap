import {
  createBrowserRouter,
  
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Aside from "./components/Aside";
import Main from "./pages/Main";

import Posts from "./pages/Posts";
import PageNewPost from "./pages/PageNewPost";
import styled from "styled-components";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/PageLogin";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const StyledBody = styled.div`
  background-color: #ffffff;
`;

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/admin",
      element: (
        <ProtectedRoute requiredRole="PROFESSOR">
          <Posts />
        </ProtectedRoute>
      ), // Protege a rota para professores
    },
    {
      path: "/newPost",
      element: (
        <ProtectedRoute requiredRole="PROFESSOR">
          <PageNewPost />
        </ProtectedRoute>
      ), // Protege a rota para professores
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <SignupPage />,
    },
  ]);

  return (
    <AuthProvider>
      <StyledBody>
        <Navbar />
        <Aside />
        <div style={{ backgroundColor: "#ffffff" }} className="content-wrapper px-4 py-2">
          <RouterProvider router={routes} />
        </div>
      </StyledBody>
    </AuthProvider>
  );
}

export default App;
