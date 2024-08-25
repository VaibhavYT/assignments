import { useState, useMemo } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(0);

  // Use useMemo to perform the calculation only when `input` changes
  const calculation = useMemo(
    () => expensiveCalc(input),
    [input]
  );

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {calculation}</p>
    </div>
  );
}

// Correct factorial calculation function
const expensiveCalc = (n) => {
  if (n < 0) return "Undefined"; 
  if (n === 0 || n === 1) return 1; 
  return n * expensiveCalc(n - 1); 
};
