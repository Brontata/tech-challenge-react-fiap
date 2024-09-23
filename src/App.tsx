import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Aside from "./components/Aside";
import Posts from "./pages/Posts";
import PageNewPost from "./pages/PageNewPost";
import PageEditPost from "./pages/PageEditPost";
import styled from "styled-components";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Posts />,
  },
  {
    path: "/newPost",
    element: <PageNewPost />
  },
  {
    path: "/editPost/:id",
    element: <PageEditPost />
  }
]);

const StyledBody = styled.div`
  background-color: #90e0ef;
`;

function App() {
  return (
    <>
        <Aside />
    <StyledBody>
        <div className="content-wrapper px-4 py-2">
          <RouterProvider router={routes} />
        </div>
    </StyledBody>
      </>
  );
}

export default App;
