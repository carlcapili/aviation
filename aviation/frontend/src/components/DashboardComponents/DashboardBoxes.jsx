const DashboardBoxes = () => {
  return (
    <>
      <div className="w-[99%] h-50 pt-5 pb-5 flex items-center justify-center gap-x-3">
        <div className="w-92 h-40 bg-blue-400/80 rounded-xl shadow-black shadow-md backdrop-blur-xl flex items-center justify-center">
          Total Aircraft
        </div>
        <div className="w-92 h-40 bg-green-400/80 rounded-xl shadow-black shadow-md backdrop-blur-xl flex items-center justify-center">
          Active
        </div>
        <div className="w-92 h-40 bg-amber-400/80 rounded-xl shadow-black shadow-md backdrop-blur-xl flex items-center justify-center">
          Needs Maintenance
        </div>
        <div className="w-92 h-40 bg-red-400/80 rounded-xl shadow-black shadow-md backdrop-blur-xl flex items-center justify-center">
          Overdue Task
        </div>
      </div>
    </>
  );
};

export default DashboardBoxes;
