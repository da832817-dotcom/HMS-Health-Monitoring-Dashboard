import React from 'react';

const appointments = [
  { id: 1, patient: "Ali Ahmed", doctor: "Dr. Hamza", time: "10:30 AM", type: "Checkup" },
  { id: 2, patient: "Sara Khan", doctor: "Dr. Zoya", time: "11:15 AM", type: "Surgery" },
];

export default function AppointmentList() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 font-serif italic">Upcoming Appointments</h2>
      <div className="space-y-4">
        {appointments.map((app) => (
          <div key={app.id} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-300 transition-all">
            <div>
              <p className="font-bold text-slate-800">{app.patient}</p>
              <p className="text-xs text-slate-500">{app.doctor} • {app.type}</p>
            </div>
            <div className="text-right">
              <p className="text-blue-600 font-mono font-bold">{app.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}