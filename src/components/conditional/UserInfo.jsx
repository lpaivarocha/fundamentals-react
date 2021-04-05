import React from "react";
import If, { Else } from "./If";

export default function UserInfo(props) {
  const user = props.user || {};
  return (
    <div>
      <If test={user && user.name}>
        Welcome <strong>{user.name}</strong> !
        <Else test={user && user.name}>
          Welcome <strong>friend</strong> !
        </Else>
      </If>
    </div>
  );
}
