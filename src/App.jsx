import "./App.css";
import React from "react";

import Card from "./components/layout/Card";

import Lotto from "./components/lottery/Lotto";
import Counter from "./components/counter/Counter";
import Input from "./components/forms/Input";
import IndirectFather from "./components/communication/IndirectFather";
import DirectFather from "./components/communication/DirectFather";
import UserInfo from "./components/conditional/UserInfo";
import EvenOrOdd from "./components/conditional/EvenOrOdd";
import ListProducts from "./components/repetitions/ListProducts";
import ListStudents from "./components/repetitions/ListStudents";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import Random from "./components/basics/Random";
import Fragmento from "./components/basics/Fragment";
import Parameter from "./components/basics/Parameter";
import First from "./components/basics/First";

export default function App() {
  return (
    <div className="App">
      <h1>React Fundamentals</h1>

      <div className="Cards">
        <Card title="#13 - Loterry" color="#008000">
          <Lotto />
        </Card>

        <Card title="#12 - Counter" color="#0e2f44">
          <Counter />
        </Card>

        <Card title="#11 - Controlled component (Input)" color="#800000">
          <Input />
        </Card>

        <Card title="#10 - Indirect communication (state)" color="#0a75ad">
          <IndirectFather />
        </Card>

        <Card title="#09 - Direct communication" color="#0a75ad">
          <DirectFather />
        </Card>

        <Card title="#08 - Conditional rendering" color="#468499">
          <EvenOrOdd number={10} />
          <UserInfo user={{ name: "Leon" }} />
          <UserInfo user={{ email: "Leon@email.com" }} />
          <UserInfo />
        </Card>

        <Card title="#07 - Repetition table" color="#ffa500">
          <ListProducts></ListProducts>
        </Card>

        <Card title="#06 - Repetition list" color="#ffc0cb">
          <ListStudents></ListStudents>
        </Card>

        <Card title="#05 - Component with children" color="#008080">
          <Family lastName="Rock">
            <FamilyMember name="Leon" />
            <FamilyMember name="Elis" />
            <FamilyMember name="Mary" />
          </Family>
        </Card>

        <Card title="#04 - Randon" color="#ff7373">
          <Random min={1} max={60} />
        </Card>

        <Card title="#02 - Fragment" color="#ffd700">
          <Fragmento></Fragmento>
        </Card>

        <Card title="#02 - Parameter" color="#66cdaa">
          <Parameter title="Second Component" subtitle="Cool!" />
        </Card>

        <Card title="#01 - Fist" color="#b4eeb4">
          <First></First>
        </Card>
      </div>
    </div>
  );
}
