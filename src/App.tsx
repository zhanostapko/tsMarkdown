import classes from "./App.module.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
  },
  {
    path: "/new",
    element: <h1>New</h1>,
  },
  {
    path: "/:id",
    children: [
      {
        path: "",
        element: <h1>ID</h1>,
      },
      {
        path: "edit",
        element: <h1>EDIT</h1>,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

function App() {
  return (
    <Container className="my-4">
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
