import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Aside from "./components/Aside";
import Main from "./pages/Main";
import { useState } from "react";
import Posts from "./pages/Posts";
import PageNewPost from "./pages/PageNewPost";
import styled from "styled-components";

const StyledBody = styled.div`
  background-color: #90e0ef;
`;
function App() {
  const [isLogged, setIsLogged] = useState(true);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: isLogged ? <Navigate to="/admin" /> : <Main />,
    },
    {
      path: "/admin",
      element: isLogged ? <Posts /> : <Navigate to="/" />,
    },
    {
      path: "/newPost",
      element: <PageNewPost />,
    },
  ]);

  return (
    <StyledBody>
      {isLogged && (
        <>
          <Aside />
          <div className="content-wrapper px-4 py-2">
            <RouterProvider router={routes} />
          </div>
        </>
      )}
      {!isLogged && <Main />}
    </StyledBody>
  );
}

export default App;
