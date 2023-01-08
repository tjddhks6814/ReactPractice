import React, { useContext, useEffect, useState } from "react";
import {userName, userAge} from "./components/TestContext";
import { TestEffect } from "./components/TestEffect";
import TestMenoParent from "./components/TSpropsTest";
import TestState from "./components/TestState";
import TestMemoParentent from "./components/TestMemo";

const App = () => {

  const name = useContext(userName);
  const age = useContext(userAge);

  return (
    <React.Fragment>
    <TestState/>
    <TestEffect/>
    <userAge.Provider value={age} />
    <userName.Provider value={name}>
      <h2 style={{color:'blue'}}>useContext</h2>
      {name}
      {age}
    </userName.Provider>
    <TestMenoParent/>
    <TestMemoParentent/>
    </React.Fragment>
  )
}
export default App;