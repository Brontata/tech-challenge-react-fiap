import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Aside from "./components/Aside";
import Main from "./pages/Main";
import { useEffect, useState } from "react";
import Posts from "./pages/Posts";

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
  ]);

  return (
    <>
      {isLogged && (
        <>
          <Aside />
          <div className="content-wrapper px-4 py-2">
            <RouterProvider router={routes} />
          </div>
        </>
      )}
      {!isLogged && <Main />}
    </>
  );
}

export default App;
