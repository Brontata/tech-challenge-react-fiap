import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Aside from "./components/Aside";
import Posts from "./pages/Posts";
import PageNewPost from "./pages/PageNewPost";
import styled from "styled-components";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Posts />,
  },
  {
    path: "/newPost",
    element: <PageNewPost />
  }
]);

const StyledBody = styled.div`
  background-color: #90e0ef;
`;

function App() {
  return (
    <StyledBody>
      <>
        <Aside />
        <div className="content-wrapper px-4 py-2">
          <RouterProvider router={routes} />
        </div>
      </>
    </StyledBody>
  );
}

export default App;
