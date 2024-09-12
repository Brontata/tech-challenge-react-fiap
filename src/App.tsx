import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Aside from "./components/Aside";
import Posts from "./pages/Posts";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Posts />,
  },
]);

function App() {
  return (
    <>
      <Aside />
      <div className="content-wrapper px-4 py-2">
        <RouterProvider router={routes} />
      </div>
    </>
  );
}

export default App;
