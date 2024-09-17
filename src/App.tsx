import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Aside from "./components/Aside";
import Main from "./pages/Main";
import { useState } from "react";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <>
      {isLogged && <Aside /> && (
        <div className="content-wrapper px-4 py-2">
          <RouterProvider router={routes} />
        </div>
      )}
      {!isLogged && <Main />}
    </>
  );
}

export default App;
