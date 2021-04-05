import React from "react";

export default function Random(props) {
  const min = Math.ceil(props.min);
  const max = Math.floor(props.max);
  const choice = Math.floor(Math.random() * (max - min)) + min;
  return (
    <div>
      <h2>Random value</h2>
      <p>
        <strong>Min value: </strong> {props.min}
      </p>
      <p>
        <strong>Max value: </strong> {props.max}
      </p>
      <p>
        <strong>Choice: </strong> {choice}
      </p>
    </div>
  );
}
