import React from "react";

import Sidebar from "../components/sidebar";
import MenuBox from "../components/menuBox";
import OverviewContainer from "../components/overviewContainer";

const Overview = () => {
  return (
    <div className="app">
      <div className="flex" style={{ height: "100%", minHeight: "100vh" }}>
        <Sidebar
          activeDashboard="false"
          activeSettings="false"
          activeOverview="true"
        />
        <OverviewContainer />
        <MenuBox display="none" />
      </div>
    </div>
  );
};

export default Overview;
