import React from "react";
import { Route, Routes } from "react-router-dom";
import Calculator from "./Calculator";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Calculator}></Route>
    </Routes>
  );
};

export default App;
