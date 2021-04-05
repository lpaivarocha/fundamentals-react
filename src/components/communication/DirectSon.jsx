import React from "react";

export default function DirectSon(props) {
  return (
    <div>
      <span> {props.name}</span>
      <span> {props.age}</span>
      <span> {props.nerd ? 'True' : 'False'}</span>
    </div>
  );
}