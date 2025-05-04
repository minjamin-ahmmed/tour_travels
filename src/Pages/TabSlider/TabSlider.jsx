import React, { useState } from "react";

const TabSlider = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("04 May, 2025");
  date.setDate(date.getDate() + count);

  const handleReset = () => {
    setStep(1);
    setCount(0);
  };

  return (
    <div className="max-w-5xl mx-auto my-24 bg-blue-700 text-white rounded-4xl p-12 flex flex-col items-center justify-center">
      <div className="flex items-center gap-4 mb-8">
        {/* <div
          onClick={() => setStep((s) => s + 1)}
          className="border border-white rounded-md w-12 h-12 p-2 flex items-center justify-center font-semibold"
        >
          +
        </div> */}

        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />

        <p>Step: {step} </p>

        {/* <div
          onClick={() => setStep((s) => s - 1)}
          className="border border-white rounded-md w-12 h-12 p-2 flex items-center justify-center font-semibold"
        >
          -
        </div> */}
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div
          onClick={() => setCount((s) => s + step)}
          className="border border-white rounded-md w-12 h-12 p-2 flex items-center justify-center font-semibold"
        >
          +
        </div>

        {/* <p>Count: {count} </p> */}

        <input
          type="text"
          value={count}
          className="border border-white rounded-md p-2"
        />

        <div
          onClick={() => setCount((s) => s - step)}
          className="border border-white rounded-md w-12 h-12 p-2 flex items-center justify-center font-semibold"
        >
          -
        </div>
      </div>

      <p className="text-center font-semibold text-2xl">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} Days From Today `
            : `${Math.abs(count)} Days ago `}
        </span>

        <span>{date.toDateString()}</span>
      </p>

      <div className="mt-8 flex items-center justify-center">
        <button
          onClick={handleReset}
          className="bg-white text-blue-700 rounded-md font-semibold px-6 py-2 "
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TabSlider;
