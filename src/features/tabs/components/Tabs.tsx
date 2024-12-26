import React, { useState } from "react";

interface TabsProps {
  tabs: string[];
  contents: React.ReactNode[];
  tabHeader: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, contents, tabHeader }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="w-full rounded-md border border-gray-700 bg-stone-700 shadow">
        {tabHeader}
        <div className="mt-2 flex px-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 text-lg ${
                activeTab === index
                  ? "border-b-2 border-cyan-400 text-cyan-400"
                  : "hover:text-cyan-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4">{contents[activeTab]}</div>
    </div>
  );
};
