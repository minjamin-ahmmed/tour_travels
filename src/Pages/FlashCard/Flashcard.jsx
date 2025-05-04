import React, { useState } from "react";

const questions = [
  {
    id: 1,
    question: "What keyword declares a variable in JavaScript?",
    answer: "var",
  },
  { id: 2, question: "What type does typeof null return?", answer: "object" },
  {
    id: 3,
    question: "Which method is used to parse JSON strings?",
    answer: "parse",
  },
  {
    id: 4,
    question: "What is the output type of Array.isArray()?",
    answer: "boolean",
  },
  {
    id: 5,
    question: "Which loop checks condition after execution?",
    answer: "do-while",
  },
  { id: 6, question: "What symbol is used for comments?", answer: "//" },
  {
    id: 7,
    question: "What value represents 'not-a-number' in JavaScript?",
    answer: "NaN",
  },
  {
    id: 8,
    question: "Which operator is used for strict equality?",
    answer: "===",
  },
  { id: 9, question: "What keyword defines a constant?", answer: "const" },
];

const Flashcard = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleClickToggle = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="w-11/12 lg:w-9/12 mx-auto my-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {questions.map((question) => (
          <div
            key={question.id}
            onClick={() => handleClickToggle(question.id)}
            className={`rounded-xl border border-gray-200 p-8 flex items-center justify-center ${
              question.id === selectedId ? "bg-red-500 text-white" : ""
            }`}
          >
            <h2>
              {question.id === selectedId ? question.answer : question.question}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flashcard;
