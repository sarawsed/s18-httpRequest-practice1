import React from "react";

const Content = ({ tabs, activeTab }) => {
  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className="p-5 text-center mt-10">
      <p className="text-gray-700 text-lg">{activeContent}</p>
    </div>
  );
};

export default Content;
