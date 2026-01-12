import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Module Load Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-10 border-2 border-dashed border-red-200 bg-red-50 rounded-3xl text-center">
          <span className="text-4xl">⚠️</span>
          <h2 className="text-lg font-bold text-red-800 mt-4">Module Unavailable</h2>
          <p className="text-red-600 text-sm">Yeh section abhi load nahi ho saka. Please baad mein try karein.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-red-100 text-red-700 px-4 py-2 rounded-lg text-xs font-bold hover:bg-red-200"
          >
            Retry Loading
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;