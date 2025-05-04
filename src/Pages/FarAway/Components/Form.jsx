import React, { useState } from "react";

const Form = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = { description, quantity, packed: false, id: Date.now() };

    console.log(newItem);

    setDescription("");
    setQuantity(1);
  };

  return (
    <div className="bg-orange-800 py-8 w-full">
      <div className="flex items-center justify-center gap-4">
        <h1 className="text-white font-semibold text-2xl text-center">
          What Do you Need For your Trip?
        </h1>

        <form onSubmit={handleSubmit} className="flex items-center gap-4">
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="rounded-full bg-amber-200 px-6 py-2 text-gray-950"
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Item..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="rounded-full bg-amber-200 px-6 py-2 text-gray-950"
          />

          <button
            type="submit"
            className="rounded-full bg-amber-200 px-6 py-2 text-gray-950 cursor-pointer"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
