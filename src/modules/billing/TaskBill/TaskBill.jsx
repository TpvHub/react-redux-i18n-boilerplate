import React from 'react';
import { Table } from 'antd';
const { Column } = Table;

const data = Array(10).fill().map((_, i) => ({
  key: i,
  fullname: 'A-bus Oy Matti Melamies--' + i,
  workName: 'deliveries',
  addedTime: '2016-06-08 15:21',
  deadline: '-',
  content: 'Supplies Sales',
  workDone: '0/1',
}));

function TaskBill() {
  return (
    <div className="task-bill">
      <div className="card-title">Billable</div>
      <div className="task-bill__table">
        <Table bordered dataSource={data}>
          <Column
            sorter={(a, b) => (a.fullname > b.fullname) - (a.fullname < b.fullname)}
            title="Customer"
            dataIndex="fullname"
            render={(text) => (
              <span>
                <a href="javascript:;">{text}</a>
              </span>
            )}
          />
          <Column title="Name of the work" dataIndex="workName" key="workName" sorter={(a, b) => (a.workName > b.workName) - (a.workName < b.workName)} />
          <Column title="Work added" dataIndex="addedTime" key="addedTime" sorter={(a, b) => (a.addedTime > b.addedTime) - (a.addedTime < b.addedTime)} />
          <Column title="deadline" dataIndex="deadline" key="deadline" sorter={(a, b) => (a.deadline > b.deadline) - (a.deadline < b.deadline)} />
          <Column title="The content of the work" dataIndex="content" key="content" sorter={(a, b) => (a.content > b.content) - (a.content < b.content)} />
          <Column title="Work done" dataIndex="workDone" key="workDone" sorter={(a, b) => (a.workDone > b.workDone) - (a.workDone < b.workDone)} />
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

export default TaskBill;