import React from "react";
const initialItems = [
  { id: 1, description: "Passport", quantity: 1, packed: true },
  { id: 2, description: "Backpack", quantity: 1, packed: true },
  { id: 3, description: "T-Shirts", quantity: 5, packed: false },
  { id: 4, description: "Jeans", quantity: 2, packed: false },
  { id: 5, description: "Underwear", quantity: 6, packed: true },
  { id: 6, description: "Socks", quantity: 5, packed: false },
  { id: 7, description: "Toothbrush", quantity: 1, packed: false },
  { id: 8, description: "Toothpaste", quantity: 1, packed: false },
  { id: 9, description: "Sunscreen", quantity: 1, packed: false },
  { id: 10, description: "Power Bank", quantity: 1, packed: true },
  { id: 11, description: "Phone Charger", quantity: 1, packed: true },
  { id: 12, description: "Camera", quantity: 1, packed: false },
  { id: 13, description: "Travel Towel", quantity: 1, packed: false },
  { id: 14, description: "Flip Flops", quantity: 1, packed: false },
  { id: 15, description: "Water Bottle", quantity: 1, packed: false },
  { id: 16, description: "Snacks", quantity: 3, packed: false },
  { id: 17, description: "Travel Guide Book", quantity: 1, packed: false },
  { id: 18, description: "Hat", quantity: 1, packed: false },
  { id: 19, description: "Sunglasses", quantity: 1, packed: true },
  { id: 20, description: "Rain Jacket", quantity: 1, packed: false },
];

const Packinglist = () => {
  return (
    <div className="bg-yellow-900 p-8">
      <ul className="flex items-center flex-wrap gap-4">
        {initialItems.map((item) => (
          <li key={item.id} className="flex items-center justify-center gap-8">
            <span className={`${item.packed ? "line-through" : ""}`}>
              {item.quantity} {item.description}
            </span>

            <span>
              <button>❌</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Packinglist;
