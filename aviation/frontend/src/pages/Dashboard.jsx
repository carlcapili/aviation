import { useTime } from "../context/TimeContext";
import AllAircraft from "../components/DashboardComponents/AllAircraft";
import AllTask from "../components/DashboardComponents/AllTask";
import DashboardBoxes from "../components/DashboardComponents/DashboardBoxes";

const Dashboard = () => {
  const { formattedDate, formattedTime } = useTime();

  return (
    <div className="h-screen ml-50 pt-3 flex flex-col items-center overflow-auto">
      <div className="w-full h-18 flex items-center justify-center">
        <div className="w-[95%] h-14 bg-white/10 shadow-sm shadow-black backdrop-blur-2xl flex justify-between items-center pl-6 rounded-2xl">
          <span className="font-bold text-2xl">Dashboard</span>
          <div className="pr-6 font-semibold text-xl">
            {formattedDate} {formattedTime}
          </div>
        </div>
      </div>

      <DashboardBoxes />

      <div className="w-[98%] flex-grow flex justify-between items-start pl-2 pr-2 gap-x-1 pb-4">
        <AllAircraft />
        <AllTask />
      </div>
    </div>
  );
};

export default Dashboard;
