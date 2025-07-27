import React, { useEffect, useState, useContext } from "react";
import { DarkModeContext } from "../../App";

interface LoaderProps {
  onComplete?: () => void;
  duration?: number;
}

const Loader: React.FC<LoaderProps> = ({ onComplete, duration = 2000 }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateProgress = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);

      setProgress(newProgress);

      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setIsComplete(true);
        setTimeout(() => {
          onComplete?.();
        }, 500);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [duration, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isDarkMode ? "bg-slate-900" : "bg-white"
      }`}
    >
      {/* Main container with orange background - full screen */}
      <div
        className={`w-full h-screen relative overflow-hidden ${
          isDarkMode
            ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
            : "bg-gradient-to-br from-slate-50 via-white to-slate-100"
        }`}
      >
        {/* Black header that loads from left to right */}
        <div className="relative h-20 bg-primary-300">
          <div
            className="absolute top-0 left-0 h-full bg-black transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          >
            <div className="flex items-center justify-between h-full px-8">
              {/* Left side text */}
              <div
                className={`font-bold text-lg uppercase tracking-wider ${
                  progress > 0 ? "text-white" : "text-slate-900"
                }`}
              >
                Frontend Developer
              </div>

              {/* Right side text */}
              <div
                className={`font-bold text-lg uppercase tracking-wider ${
                  progress > 0 ? "text-white" : "text-slate-900"
                }`}
              >
                Fullstack Developer
              </div>
            </div>
          </div>
        </div>

        {/* Orange content area - centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="mb-8">
              <h1
                className={`text-4xl font-bold mb-4 ${
                  isDarkMode ? "text-slate-100" : "text-slate-900"
                }`}
              >
                Loading...
              </h1>
              <p
                className={`text-lg ${
                  isDarkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Preparing your experience
              </p>
            </div>
          </div>
        </div>

        {/* Progress percentage in bottom right */}
        <div className="absolute bottom-4 right-8">
          <span
            className={`text-[10rem] font-extrabold opacity-20 ${
              isDarkMode ? "text-slate-100" : "text-slate-900"
            }`}
          >
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
