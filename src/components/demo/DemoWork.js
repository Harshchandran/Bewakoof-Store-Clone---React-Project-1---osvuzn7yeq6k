import React from "react";
import { useParams } from "react-router-dom";

export const DemoWork = ({ myValue }) => {
  console.log("DemoWork data:", myValue);
  return (
    <>
      <div>DemoWork 123</div>
      <h1>{myValue}</h1>
    </>
  );
};
