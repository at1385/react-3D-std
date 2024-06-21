import React, { useState, useRef, useEffect } from "react";
import {
  AccordionTab,
  AccordionContentWrapper,
  AccordionContent
} from "./styled";

export default function Accordion({ className, tabs }) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTabHeight, setActiveTabHeight] = useState(0);
  const activeTabContent = useRef(null);

  useEffect(() => {
    setActiveTabHeight(activeTabContent.current.offsetHeight);
  }, [activeTabHeight, activeTab, tabs]);

  return (
    <div className={className}>
      {Boolean(tabs && tabs?.length) &&
        tabs.map((tab, index) =>
          index === activeTab ? (
            <React.Fragment key={tab.title}>
              <AccordionTab active disabled>
                {tab.title}
              </AccordionTab>
              <AccordionContentWrapper style={{ height: activeTabHeight }}>
                <AccordionContent ref={activeTabContent}>
                  {tab.content}
                </AccordionContent>
              </AccordionContentWrapper>
            </React.Fragment>
          ) : (
            <React.Fragment key={tab.title}>
              <AccordionTab onClick={() => setActiveTab(index)}>
                {tab.title}
              </AccordionTab>
              <AccordionContentWrapper>
                <AccordionContent>{tab.content}</AccordionContent>
              </AccordionContentWrapper>
            </React.Fragment>
          )
        )}
    </div>
  );
}
