import React, { useState } from "react";

import IndirectSon from "./IndirectSon";

export default function IndirectFather(props) {
  const [name, setName] = useState("?");
  const [age, setAge] = useState(0);
  const [nerd, setNerd] = useState(false);

  function provideInformations(name, age, nerd) {
    setName(name);
    setAge(age);
    setNerd(nerd);
  }

  return (
    <div>
      <div>
        <span>{name}</span>
        <span>
          <strong> {age}</strong>
        </span>
        <span> {nerd ? "True" : "False"}</span>
      </div>
      <IndirectSon whenClick={provideInformations} />
    </div>
  );
}
