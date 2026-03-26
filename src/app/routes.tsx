import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Formations from "./pages/Formations";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "formations", Component: Formations },
      { path: "a-propos", Component: APropos },
      { path: "contact", Component: Contact },
    ],
  },
]);
