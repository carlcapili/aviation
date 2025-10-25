import { useTime } from "../context/TimeContext";
// import AddAirplanes from "../components/DashboardComponents/AddAirplanes";
import Airplane from "../components/DashboardComponents/Airplane";
const Fleet = () => {
  const { formattedDate, formattedTime } = useTime();

  return (
    <>
      <div className="h-screen ml-50 pt-3 flex flex-col items-center">
        <div className="w-full h-18 flex items-center justify-center">
          <div className="w-[95%] h-14 bg-white/10 shadow-sm shadow-black backdrop-blur-2xl flex justify-between items-center pl-6 space-evenly rounded-2xl">
            <span className="font-bold text-2xl">Fleet</span>

            <div className="pr-6 font-semibold text-xl">
              {formattedDate} {formattedTime} PH TIME
            </div>
          </div>
        </div>

        <div className="w-[98%] h-[90%] flex items-center justify-center mb-3 mt-3 space-x-2">
          <Airplane />
          {/* //<AddAirplanes /> */}
        </div>
      </div>
    </>
  );
};

export default Fleet;
