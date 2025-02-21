import { lazy } from "react";
import PrivateRoute from "./PrivateRoute";

const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const Jobs = lazy(() => import("../pages/jobs/Jobs"));

const privateRoutes = [
  { path: "/", element: <PrivateRoute component={Dashboard} /> },
  { path: "/jobs", element: <PrivateRoute component={Jobs} /> },
];

export default privateRoutes;
