import React, { useContext, useState } from "react";
import { Mycontext } from "../../../utils/Context";
import { Link, useLocation } from "react-router-dom";
import PieChartComponent from "./PieChart/PieChartComponent";

const Dashboard = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const location = useLocation();

  return (
    <div
      class={` flex relative ${
        !expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[320px] w-[calc(100%-320px)]"
      }  overflow-y-auto   space-y-4 p-4 `}
    >
      <div className="w-[284px] h-[471px] bg-white rounded-[14px]">
        <PieChartComponent />
      </div>
    </div>
  );
};

export default Dashboard;
