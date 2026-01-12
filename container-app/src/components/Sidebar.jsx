import React from "react";

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="w-72 bg-slate-900 text-white flex flex-col shadow-2xl h-screen sticky top-0">
      <div className="p-8">
        <div className="flex items-center gap-3 bg-slate-800 p-4 rounded-2xl border border-slate-700">
          <span className="text-3xl">🏥</span>
          <div>
            <h1 className="text-xl font-black tracking-tight text-white">
              MEDI<span className="text-blue-500">CORE</span>
            </h1>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
              Health System v1.0
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-6 space-y-3">
        <div
          onClick={() => setActiveTab("patients")}
          className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all font-bold shadow-lg ${
            activeTab === "patients"
              ? "bg-blue-600 text-white shadow-blue-900/20"
              : "text-slate-400 hover:bg-slate-800"
          }`}
        >
          <span>👤</span> Patient Records
        </div>

        <div
          onClick={() => setActiveTab("appointments")}
          className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all font-bold shadow-lg ${
            activeTab === "appointments"
              ? "bg-blue-600 text-white shadow-blue-900/20"
              : "text-slate-400 hover:bg-slate-800"
          }`}
        >
          <span>📅</span> Appointments
        </div>
      </nav>

      <div className="p-8 border-t border-slate-800">
        <div className="bg-slate-800/50 p-4 rounded-xl text-center border border-slate-700">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest text-center">
            System Status
          </p>
          <p className="text-green-500 text-xs font-bold mt-1 inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
            All Modules Online
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;