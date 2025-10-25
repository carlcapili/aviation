import { Outlet } from "react-router-dom";
import SideNavigation from "../components/DashboardComponents/SideNavigation";
const DashboardLayout = () => {
  return (
    <>
      <SideNavigation />
      <Outlet />
    </>
  );
};

export default DashboardLayout;
