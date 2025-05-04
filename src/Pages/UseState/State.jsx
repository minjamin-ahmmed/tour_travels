import { BadgeX } from "lucide-react";
import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const State = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleNextButton = () => {
    if (step < 3) setStep((s) => s + 1);
  };

  const handleBackButton = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  return (
    <div className="max-w-5xl mx-auto mt-24 relative">
      <div className="absolute -top-4 -right-4">
        <button
          onClick={() => setIsOpen((is) => !is)}
          className="text-white hover:text-blue-500"
        >
          <BadgeX size={32} />
        </button>
      </div>

      {isOpen && (
        <div className="border border-blue-500 rounded-2xl p-8 bg-gray-950">
          <div className="flex items-center justify-between mb-6">
            <div
              className={
                step >= 1
                  ? "w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold text-xl"
                  : ""
              }
            >
              1
            </div>
            <div
              className={
                step >= 2
                  ? "w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold text-xl"
                  : ""
              }
            >
              2
            </div>
            <div
              className={
                step >= 3
                  ? "w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold text-xl"
                  : ""
              }
            >
              3
            </div>
          </div>

          <p className="text-2xl text-white text-center mb-6">
            Step {step}: {messages[step - 1]}{" "}
          </p>

          <div className="flex items-center justify-between">
            <button onClick={handleBackButton} className="btn btn-primary">
              Previous{" "}
            </button>
            <button onClick={handleNextButton} className="btn btn-primary">
              Next{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default State;
