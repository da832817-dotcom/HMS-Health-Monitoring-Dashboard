import React from "react";
import { useDispatch } from "react-redux";
import { updateUserName } from "../store/userSlice";

const Header = ({ user, activeTab }) => {
  const dispatch = useDispatch();

  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-10 shadow-sm sticky top-0 z-10">
      <div className="flex items-center gap-8">
        <div className="flex flex-col">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            {activeTab === "patients" ? "Directory" : "Scheduler"}
          </h2>
          <h1 className="text-xl font-bold text-slate-800 font-mono italic lowercase">
            /{activeTab}
          </h1>
        </div>

        <div className="flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-xl border border-blue-100">
          <span className="text-[10px] font-bold text-blue-400 uppercase">Update:</span>
          <input
            type="text"
            className="bg-transparent border-none text-sm outline-none w-32 font-medium text-blue-700 placeholder:text-blue-300"
            placeholder="Change staff..."
            onChange={(e) => dispatch(updateUserName(e.target.value))}
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="text-right hidden md:block">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
            Primary Consultant
          </p>
          <p className="text-sm font-black text-slate-700">{user.userName}</p>
        </div>
        <div className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-200 border-2 border-white uppercase">
          {user.userName.substring(0, 2)}
        </div>
      </div>
    </header>
  );
};

export default Header;