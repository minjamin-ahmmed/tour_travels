import React, { useState } from "react";

const Practice = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date("4 May, 2025");
  date.setDate(date.getDate() + count);

  return (
    <div className="max-w-5xl mx-auto mt-24">
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <div className="flex items-center justify-center gap-8 mb-8">
          <button
            onClick={() => setStep((s) => s - 1)}
            className="p-4 rounded-md text-2xl text-blue-500 border border-blue-500 cursor-pointer"
          >
            -
          </button>

          <p className="text-gray-950 font-semibold text-2xl">Step:{step} </p>

          <button
            onClick={() => setStep((s) => s + 1)}
            className="p-4 rounded-md text-2xl text-blue-500 border border-blue-500 cursor-pointer"
          >
            +
          </button>
        </div>

        <div className="flex items-center justify-center gap-8 mb-8">
          <button
            onClick={() => setCount((c) => c - step)}
            className="p-4 rounded-md text-2xl text-blue-500 border border-blue-500 cursor-pointer"
          >
            -
          </button>

          <p className="text-gray-950 font-semibold text-2xl">Count:{count} </p>

          <button
            onClick={() => setCount((c) => c + step)}
            className="p-4 rounded-md text-2xl text-blue-500 border border-blue-500 cursor-pointer"
          >
            +
          </button>
        </div>

        <div className="text-center text-2xl font-semibold text-gray-950">
          <p>
            <span>
              {count === 0
                ? "Today is "
                : count > 0
                ? `${count} Days From Today `
                : `${Math.abs(count)} Days Ago `}
            </span>
            <span>{date.toDateString()}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Practice;
