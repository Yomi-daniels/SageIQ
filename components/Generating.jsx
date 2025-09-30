import React, { useEffect, useState } from "react";
// import { loading } from "../assets";

const Generating = ({ className }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0; // restart after reaching 100
        return prev + 1;
      });
    }, 50); // adjust speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`flex flex-col items-center h-[5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base justify-center`}
    >
      <div className="flex items-center mb-2">
        <img src="/loading.png" alt="loading" className="w-5 h-5 mr-3 animate-spin" />
        <span>Generating...</span>
      </div>
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Generating;
