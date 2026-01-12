import React, { Suspense, useState } from "react";
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ErrorBoundary from "./components/ErrorBoundary";

// Remote Components
const PatientList = React.lazy(() => import("patientApp/PatientList"));
const AppointmentList = React.lazy(() => import("appointmentApp/AppointmentList"));

function App() {
  const user = useSelector((state) => state.user);
  const [activeTab, setActiveTab] = useState("patients");

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 flex flex-col">
        <Header user={user} activeTab={activeTab} />

        <div className="p-10 max-w-7xl mx-auto w-full">
          <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner activeTab={activeTab} />}>
            {activeTab === "patients" ? (
              <PatientList user={user} />
            ) : (
              <AppointmentList />
            )}
          </Suspense>
          </ErrorBoundary>
        </div>
      </main>
    </div>
  );
}

// Chota sa internal component for loading
const LoadingSpinner = ({ activeTab }) => (
  <div className="flex flex-col items-center justify-center h-96 bg-white rounded-3xl border-2 border-dashed border-slate-200">
    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    <p className="mt-6 text-slate-400 font-bold uppercase tracking-widest text-xs animate-pulse">
      Fetching {activeTab} Data...
    </p>
  </div>
);

export default App;