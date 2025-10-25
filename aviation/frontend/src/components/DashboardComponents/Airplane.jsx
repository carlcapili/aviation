import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Addplane from "./AircraftComponents/AddPlane";
const Airplane = () => {
  const navigate = useNavigate();

  const [isModal, setModal] = useState(false);

  return (
    <>
      <div className="w-[95%] h-[98%] bg-slate-300/30 shadow-lg shadow-black/40 backdrop-blur-xl rounded-2xl p-6 overflow-auto">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-3xl flex justify-start">
            Aircrafts
          </span>

          <span
            onClick={() => setModal(true)}
            className="font-bold text-3xl w-12 h-12 bg-slate-400 rounded-xl flex items-center justify-center cursor-pointer hover:bg-slate-500 hover:text-white"
          >
            +
          </span>
        </div>
        <div className="w-full overflow-auto pt-5">
          <table className="min-w-full table-auto text-sm text-gray-800">
            <thead>
              <tr className="text-left bg-gray-100 border-b text-xl">
                <th className="px-4 py-3 font-medium">Aircraft</th>
                <th className="px-4 py-3 font-medium">Owner</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Last Maintenance</th>
                <th className="px-4 py-3 font-medium">Flight Data</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 flex items-center gap-3">
                  {/* Airplane SVG Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.5 19.5L21 12 2.5 4.5v6l6 1.5-6 1.5v6z"
                    />
                  </svg>
                  <a
                    onClick={() => navigate("/dashboard/aircrafts")}
                    className="text-blue-600 font-medium hover:underline cursor-pointer"
                  >
                    SR-71 BlackBird
                  </a>
                </td>
                <td className="px-4 py-3">Bill Gates</td>
                <td className="px-4 py-3">Deployed</td>
                <td className="px-4 py-3">19.05.2024</td>
                <td className="px-4 py-3">120 hrs</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-center justify-center">
          {isModal && (
            <div className="w-1/2 absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
              <Addplane />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Airplane;
