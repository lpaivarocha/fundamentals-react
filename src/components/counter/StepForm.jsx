import React from "react";

export default function StepForm(props) {
  return (
    <div>
      <label htmlFor="stepInput">Step: </label>
      <input
        id="stepInput"
        type="number"
        value={props.step}
        onChange={e => props.setStep(+e.target.value)}
      />
    </div>
  );
}
