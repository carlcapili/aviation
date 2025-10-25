import { RiDashboardHorizontalFill } from "react-icons/ri";
import { IoAirplane } from "react-icons/io5";
import { IoMdAnalytics } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { RiLogoutBoxFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const SideNavigation = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed h-screen w-50 bg-slate-300 flex flex-col items-center">
        {/* Avatar Profile */}
        <div className="pt-10">
          <div className="flex justify-center items-center gap-x-3">
            <img
              src="/images/jusuwa.jpg"
              alt="profile"
              className="rounded-full w-16 h-16"
            />
            <div className="flex flex-col">
              <div className="text-2xl font-bold">Joshua</div>
              <div className="font-semibold">Superuser</div>
            </div>
          </div>
        </div>

        {/* Navigations  */}
        <div>
          <div className="pt-15 space-y-12 cursor-pointer">
            <div
              className="flex items-center space-x-2"
              onClick={() => navigate("/dashboard")}
            >
              <RiDashboardHorizontalFill size={28} />
              <h1 className="text-lg"> Dashboard</h1>
            </div>
            <div
              className="flex items-center space-x-2"
              onClick={() => navigate("fleet")}
            >
              <IoAirplane size={28} />
              <h1 className="text-lg"> Fleet </h1>
            </div>
            <div
              className="flex items-center space-x-2"
              onClick={() => navigate("analytics")}
            >
              <IoMdAnalytics size={28} />
              <h1 className="text-lg"> Analytics</h1>
            </div>
            <div
              className="flex items-center space-x-2"
              onClick={() => navigate("report")}
            >
              <TbReportAnalytics size={28} />
              <h1 className="text-lg"> Reports</h1>
            </div>
          </div>
        </div>

        {/* Log out */}
        <div className="pt-[10rem] cursor-pointer">
          <div className="flex space-x-3">
            <RiLogoutBoxFill size={28} />
            <h1 className="font-semibold text-xl" onClick={() => navigate("/")}>
              Log out
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavigation;
