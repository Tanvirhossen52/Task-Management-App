import { PauseIcon, Play, RotateCcw } from "lucide-react";
import React, { useRef, useState } from "react";
import timerBg from "/src/assets/TimerBg.png";

const TimeTraker = () => {
  const [Time, setTime] = useState(0);
  const stopWatchRef = useRef(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    stopWatchRef.current = new Date().getTime() - Time;
    intervalRef.current = setInterval(() => {
      setTime(new Date().getTime() - stopWatchRef.current);
    }, 10);
  };

  const handlePuhse = () => {
    clearInterval(intervalRef.current);
  };
  const handleRestart = () => {
    clearInterval(intervalRef.current);
    setTime(0);
  };

  function formateTime() {
    const ms = Math.floor((Time % 1000) / 10)
      .toString()
      .padStart(2, "0");
    const s = Math.floor((Time / 1000) % 10)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((Time / (1000 * 60)) % 60)
      .toString()
      .padStart(2, "0");
    const h = Math.floor(Time / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0");

    return `${h}:${m}:${s}:${ms}`;
  }

  return (
    <div className="flex text-center">
      <div className="bg-brand-primary w-full  relative justify-center items-center  p-4 space-y-2 rounded-xl  ">
       <img src={timerBg} alt="" className=" absolute opacity-50  rounded-xl object-cover w-full h-full top-0 left-0 overflow-hidden" />
        <div className=" relative z-2">
          <p className="text-left text-md text-white">Time Tracker</p>

          <div>
            <span className="text-xl text-white font-semibold">{formateTime()}</span>
            <div className="flex gap-2 mt-2">
              <button
                className="bg-white p-2 rounded-full"
                onClick={handleStart}
              >
                {" "}
                <Play size={20} />
              </button>
              <button
                className="bg-red-600 p-2 text-white rounded-full"
                onClick={handlePuhse}
              >
                <PauseIcon size={20} />
              </button>
              <button
                className="bg-white p-2 rounded-full"
                onClick={handleRestart}
              >
                <RotateCcw size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTraker;
