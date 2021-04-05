import React, { useState } from "react";

import "./Lotto.css";

export default function Lotto(props) {
  function generateNumberIfNotExists(min, max, array) {
    const random = parseInt(Math.random() * (max + 1 - min)) + min;
    return array.includes(random)
      ? generateNumberIfNotExists(min, max, array)
      : random;
  }

  function generateNumbers(count) {
    const numbers = Array(count)
      .fill(0)
      .reduce((nums) => {
        const newNumber = generateNumberIfNotExists(1, 60, nums);
        return [...nums, newNumber];
      }, [])
      .sort((n1, n2) => n1 - n2);

    return numbers;
  }

  const [count, setCount] = useState(props.count || 6);
  const [numbers, setNumbers] = useState(generateNumbers(count));

  return (
    <div className="Lotto">
      <h2>Lotto</h2>
      <h3>{numbers.join(" ")}</h3>
      <div>
        <label htmlFor="idCount">Amount of numbers</label>
        <input
          id="idCount"
          type="number"
          min="6"
          max="10"
          value={count}
          onChange={(e) => {
            setCount(+e.target.value);
            setNumbers(generateNumbers(+e.target.value));
          }}
        />
      </div>
      <button onClick={(_) => setNumbers(generateNumbers(count))}>
        Generate Numbers
      </button>
    </div>
  );
}
