import { useState } from "react";
import { useTime } from "../context/TimeContext";
import AircraftOverview from "../components/DashboardComponents/AircraftComponents/AircraftOverview";
import AircraftConfiguration from "../components/DashboardComponents/AircraftComponents/AircraftConfiguration";
import AircraftTask from "../components/DashboardComponents/AircraftComponents/AircraftTask";
import AircraftLog from "../components/DashboardComponents/AircraftComponents/AircraftLog";
import AircraftAPSB from "../components/DashboardComponents/AircraftComponents/AircraftAPSB";

const AircraftInfo = () => {
  const { formattedDate, formattedTime } = useTime();
  const [activeTab, setActiveTab] = useState("Info");

  const handleActiveTab = () => {
    switch (activeTab) {
      case "Info":
        return <AircraftOverview />;
      case "Log":
        return <AircraftLog />;
      case "Config":
        return <AircraftConfiguration />;
      case "Task":
        return <AircraftTask />;
      case "APSB":
        return <AircraftAPSB />;
      default:
        return <AircraftOverview />;
    }
  };

  return (
    <div className="h-screen ml-50 pt-3 flex flex-col items-center">
      {/* Header / Dynamic Island */}
      <div className="w-full h-18 flex items-center justify-center">
        <div className="w-[95%] h-14 bg-white/10 shadow-sm shadow-black backdrop-blur-2xl rounded-2xl px-6 flex items-center justify-between">
          {/* Title (Left) */}
          <div className="font-bold text-2xl whitespace-nowrap">Aircraft</div>

          {/* Tabs (Center) */}
          <div className="flex-1 flex justify-center">
            <ul className="flex space-x-6 text-lg font-semibold ml-45">
              {["Info", "Log", "Config", "Task", "APSB"].map((tab) => (
                <li
                  key={tab}
                  className={`cursor-pointer transition hover:text-blue-500 ${
                    activeTab === tab
                      ? "text-blue-600 underline underline-offset-4"
                      : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>

          {/* Date & Time (Right) */}
          <div className="text-lg font-semibold whitespace-nowrap">
            {formattedDate} {formattedTime}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-[98%] h-[90%] flex items-center justify-center mb-3 mt-3 space-x-2">
        {handleActiveTab()}
      </div>
    </div>
  );
};

export default AircraftInfo;
