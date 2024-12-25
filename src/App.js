import React, { useState } from "react";
import tabContentHOC from "./components/HOC/tabContentHOC";
import Header from "./components/header";
import Content from "./components/content";
import tabsData from "./components/data/tabsData";

const HeaderWithTabs = tabContentHOC(Header);
const ContentWithTabs = tabContentHOC(Content);

const App = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0]?.id || 0);
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="min-h-screen bg-white">
      <HeaderWithTabs
        tabs={tabsData}
        activeTab={activeTab}
        onTabClick={handleTabClick}
      />
      <ContentWithTabs tabs={tabsData} activeTab={activeTab} />
    </div>
  );
};

export default App;
