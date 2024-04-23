import { createBrowserRouter } from "react-router-dom";
import Home from "./global/Home";
import Menu from "./features/menu/Menu";
createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
]);
createBrowserRouter;
export default function App() {
  return <div>Hello Vite</div>;
}
