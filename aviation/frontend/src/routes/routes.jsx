import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import DashboardLayout from "../layout/DashboardLayout";
import Fleet from "../pages/Fleet";
import Analytics from "../pages/Analytics";
import Report from "../pages/Report";
import AircraftInfo from "../pages/AircraftInfo";
import Dashboard from "../pages/Dashboard";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "login", // relative path
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard", // no leading slash
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "fleet", //  relative path
        element: <Fleet />,
      },
      {
        path: "analytics", //
        element: <Analytics />,
      },
      {
        path: "report", //  FIXED: removed leading slash
        element: <Report />,
      },
      {
        path: "aircrafts", //  FIXED: removed leading slash
        element: <AircraftInfo />,
      },
    ],
  },
];

export default routes;
