import React, { useState } from "react";
import { TabsWrapper, Tab } from "./styled";

export default function Tabs({ className, tabs }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={className}>
      <TabsWrapper>
        {Boolean(tabs && tabs?.length) &&
          tabs.map((tab, index) => {
            if (index === activeTab) {
              return (
                <Tab active key={tab.title} disabled>
                  {tab.title}
                </Tab>
              );
            }
            return (
              <Tab key={tab.title} onClick={() => setActiveTab(index)}>
                {tab.title}
              </Tab>
            );
          })}
      </TabsWrapper>
      <>{tabs[activeTab].content}</>
    </div>
  );
}
