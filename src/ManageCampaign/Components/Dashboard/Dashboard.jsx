import React, { useContext, useState } from "react";
import { Mycontext } from "../../../utils/Context";
import { Link, useLocation } from "react-router-dom";
import RoiComp from "./RofReport/Rofreport";



import InvestComp from "./InvestComp/InvestComp";
import CampaignComponent from "./CampaignDetail/CampaignComponent";
import BarGraph from "./BarGraph/BarGraph";

import PieChartComponent from "./Piechart/PieChartComponent";

const Dashboard = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const location = useLocation();

  

  return (
    <div
      class={` flex h-screen relative ${
        !expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[320px] w-[calc(100%-320px)]"
      }  overflow-y-auto   space-y-4 p-4 `}
    >
     
       <div className="flex flex-col  ml-6 mt-2 mb-2 gap-[17px] ">
        <CampaignComponent/>
        <PieChartComponent/>
       </div>
       <div class="flex flex-col w-10/12 ml-10 mr-4 top-2/4 ">
        
        <BarGraph expanded={expanded}/>
        <RoiComp expanded={expanded}/>
        <InvestComp expanded={expanded} />
       </div>

      

       <div></div>
    </div>
  );
};

export default Dashboard;
