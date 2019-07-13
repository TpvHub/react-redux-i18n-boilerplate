import React from 'react';

import { Table } from 'antd';
const { Column } = Table;

const data = [
];

const paginationConfig = {
  pageSize: 5,
  total: data.length
};

export default function RequestedOrdersPage() {
  return (
    <div className="">
      <div className="card-title">Requested Offers</div>
      <div>
        <Table bordered dataSource={data} pagination={paginationConfig}>
          <Column
            title="Customer"
            dataIndex="fullname"
            key="fullname"
            render={(text) => (
              <span>
                <a href="javascript:;">{text}</a>
              </span>
            )}
          />
          <Column title="Name of the work" dataIndex="workName" key="workName" />
          <Column title="Work added" dataIndex="addedTime" key="addedTime" />
          <Column title="Deadline" dataIndex="deadline" key="deadline" />
          <Column title="The content of the work" dataIndex="content" key="content" />
          <Column title="Work done" dataIndex="workDone" key="workDone" />
          <Column
            title="Open the data"
            key="action"
            render={() => (
              <span>
                <a href="javascript:;">Open</a>
              </span>
            )}
          />
        </Table>
      </div>
    </div>
  );
}