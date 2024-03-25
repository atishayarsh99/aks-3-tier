import { lazy } from "react";

const List = lazy(() => import("../pages/List.jsx"));
const Form = lazy(() => import("../pages/Form.jsx"));

export const privateRoutes = [
  { path: "/", component: List },
  { path: "/form", component: Form },
];
