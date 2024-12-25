import React, { useState } from "react";

const tabContentHOC = (TabsComponent) => {
  return ({ tabs, activeTab, onTabClick, ...props }) => {
    return (
      <TabsComponent
        {...props}
        tabs={tabs}
        activeTab={activeTab}
        onTabClick={onTabClick}
      />
    );
  };
};

export default tabContentHOC;
