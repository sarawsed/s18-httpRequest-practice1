import React from "react";
const Header = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="bg-blue-300 p-8">
      <div className="flex justify-center space-x-2 sm:space-x-5">
        {tabs.map((tab) => {
          return (
            <button
              key={tab.id}
              onClick={() => onTabClick(tab.id)}
              className={`rounded-md px-3 sm:px-5 py-2 transition text-sm sm:text-lg  ${
                activeTab === tab.id
                  ? "bg-white text-blue-600 font-bold border-b-2 border-blue-500"
                  : "text-blue-900 hover:bg-blue-100"
              }`}
            >
              {tab.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
