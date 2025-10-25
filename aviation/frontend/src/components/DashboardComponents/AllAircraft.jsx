const AllAircraft = () => {
  return (
    <>
      <div className="w-3/4 h-[98%] bg-white/30 shadow-lg shadow-black/40 backdrop-blur-xl rounded-2xl p-6 overflow-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Fleet</h2>

        <div className="w-full overflow-x-auto">
          <table className="min-w-full table-auto text-sm text-gray-800">
            <thead>
              <tr className="text-left bg-gray-100 border-b">
                <th className="px-4 py-3 font-medium">Tail Number</th>
                <th className="px-4 py-3 font-medium">Model</th>
                <th className="px-4 py-3 font-medium">Owner</th>
                <th className="px-4 py-3 font-medium">Last Maintenance</th>
                <th className="px-4 py-3 font-medium">Airtime</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {/* Row 1 */}
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
                    href="#"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    ES-DEMO
                  </a>
                </td>
                <td className="px-4 py-3">S201</td>
                <td className="px-4 py-3">Demo Fleet</td>
                <td className="px-4 py-3">19.05.2024</td>
                <td className="px-4 py-3">120 hrs</td>
                <td className="px-4 py-3">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                    Needs Maintenance
                  </span>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 flex items-center gap-3">
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
                    href="#"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    ES-ECX
                  </a>
                </td>
                <td className="px-4 py-3">C152</td>
                <td className="px-4 py-3">Training Division</td>
                <td className="px-4 py-3">28.02.2023</td>
                <td className="px-4 py-3">95 hrs</td>
                <td className="px-4 py-3">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                    Needs Maintenance
                  </span>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 flex items-center gap-3">
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
                    href="#"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    ES-VLE
                  </a>
                </td>
                <td className="px-4 py-3">MCR4-S</td>
                <td className="px-4 py-3">Research Division</td>
                <td className="px-4 py-3">24.10.2023</td>
                <td className="px-4 py-3">200 hrs</td>
                <td className="px-4 py-3">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                    Active
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllAircraft;
