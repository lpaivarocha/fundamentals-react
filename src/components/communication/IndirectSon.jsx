import React from "react";

import './Communication.css'

export default function IndirectSon(props) {
  const callBack = props.whenClick;
  const min = 50;
  const max = 70;
  const radomAge = () => parseInt(Math.random() * (max - min)) + min;
  const radomNerd = () => Math.random() > 0.5;
  return (
    <div className="Communication">
      <div>Son</div>
      <button onClick={(_) => callBack("John", radomAge(), radomNerd())}>
        Provide informations
      </button>
    </div>
  );
}
