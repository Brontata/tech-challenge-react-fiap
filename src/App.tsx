import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Aside from "./components/Aside";
import Main from "./pages/Main";

import PageNewPost from "./pages/PageNewPost";
//import PageEditPost from "./pages/PageEditPost";
import styled from "styled-components";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/PageLogin";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminView from "./pages/AdminView";
import PageEditPost from "./pages/PageEditPost";
import { PostContextProvider } from "./context/PostContext";

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
          <PostContextProvider>
            <AdminView />
          </PostContextProvider>
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
      path: "/editPost",
      element:
        <ProtectedRoute requiredRole="PROFESSOR">
          <PostContextProvider>
            <PageEditPost />
          </PostContextProvider>
        </ProtectedRoute>,
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
