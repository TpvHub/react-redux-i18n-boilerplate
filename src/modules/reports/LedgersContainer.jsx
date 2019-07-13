import React from 'react';

import { Tabs } from 'antd';

import { ControlBar, SearchTag, LedgersTable } from './ledgers';

const { TabPane } = Tabs;


function LedgersContainer() {

  return (
    <div className="ledgers">
      <Tabs defaultActiveKey="1" className="u-mgb-15">
        <TabPane tab="INVOICE SEARCH" key="1">
          <ControlBar />
        </TabPane>
        <TabPane tab="SEARCH WITH TAG" key="2">
          <SearchTag />
        </TabPane>
      </Tabs>
      <LedgersTable />
    </div>
  );
}

export default LedgersContainer;