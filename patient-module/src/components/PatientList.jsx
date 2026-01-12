import React from "react";

// Redux ka data ab Props ke zariye Shell se aaye ga
export default function PatientList({ user }) {
  // Safety check: Agar data na aaye to default values
  const userData = user || { userName: "Guest", hospitalName: "MediConnect Center" };

  const patients = [
    { id: "P001", name: "Ali Ahmed", disease: "Hypertension", status: "Stable" },
    { id: "P002", name: "Sara Khan", disease: "Dental", status: "In Treatment" },
    { id: "P003", name: "Zainab Bibi", disease: "Diabetes", status: "Critical" },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Upper Info Card - Data coming from Shell's Redux */}
      <div className="p-5 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-2xl shadow-lg flex justify-between items-center border border-slate-600">
        <div>
          <p className="text-slate-400 text-xs uppercase font-bold tracking-widest">Logged In Staff</p>
          <h3 className="text-xl font-semibold text-blue-400">{userData.userName}</h3>
        </div>
        <div className="text-right border-l border-slate-500 pl-6">
          <p className="text-slate-400 text-xs uppercase font-bold tracking-widest">Medical Facility</p>
          <h3 className="text-lg font-medium italic">{userData.hospitalName}</h3>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Patient Directory</h2>
            <p className="text-slate-500 text-sm">Manage and monitor hospital admissions</p>
          </div>
          <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-blue-200 shadow-lg">
            + Add New Patient
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-2">
            <thead>
              <tr className="text-slate-400 text-xs uppercase tracking-wider">
                <th className="px-4 py-2 font-semibold">Reg ID</th>
                <th className="px-4 py-2 font-semibold">Patient Name</th>
                <th className="px-4 py-2 font-semibold">Diagnosis</th>
                <th className="px-4 py-2 font-semibold">Condition</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((p) => (
                <tr key={p.id} className="bg-slate-50 hover:bg-blue-50 transition-all group">
                  <td className="px-4 py-4 rounded-l-xl text-slate-600 font-mono text-sm border-y border-l border-transparent group-hover:border-blue-200">{p.id}</td>
                  <td className="px-4 py-4 text-slate-900 font-bold border-y border-transparent group-hover:border-blue-200">{p.name}</td>
                  <td className="px-4 py-4 text-slate-600 text-sm border-y border-transparent group-hover:border-blue-200">{p.disease}</td>
                  <td className="px-4 py-4 rounded-r-xl border-y border-r border-transparent group-hover:border-blue-200">
                    <span className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest ${
                      p.status === "Critical" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
                    }`}>
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}