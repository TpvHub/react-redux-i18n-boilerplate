import React from 'react';
import { Table } from 'antd';
const { Column } = Table;

const data = [
  {
    key: '1',
    employee: 'rot',
    hours_this_month: '0:00',
    working_hours_last_month: '0:00',
    hours_this_week: '0:05',
    working_hours_last_week: '0:00',
  },
  {
    key: '1',
    employee: 'rot',
    hours_this_month: '0:00',
    working_hours_last_month: '0:00',
    hours_this_week: '0:05',
    working_hours_last_week: '0:00',
  },
  {
    key: '2',
    employee: 'rot',
    hours_this_month: '0:00',
    working_hours_last_month: '0:00',
    hours_this_week: '0:05',
    working_hours_last_week: '0:00',
  },
  {
    key: '3',
    employee: 'rot',
    hours_this_month: '0:00',
    working_hours_last_month: '0:00',
    hours_this_week: '0:05',
    working_hours_last_week: '0:00',
  },
  {
    key: '4',
    employee: 'rot',
    hours_this_month: '0:00',
    working_hours_last_month: '0:00',
    hours_this_week: '0:05',
    working_hours_last_week: '0:00',
  },
  {
    key: '5',
    employee: 'rot',
    hours_this_month: '0:00',
    working_hours_last_month: '0:00',
    hours_this_week: '0:05',
    working_hours_last_week: '0:00',
  },
];

export default function HourlyReport() {
  return (
    <div className="hourly-report">
      <div className="card-title">Hourly Reports</div>
      <div className="hourly-report__table">
        <Table bordered dataSource={data} scroll={{ y: 200 }}>
          <Column title="Employee" dataIndex="employee" key="employee" />
          <Column title="Hours this month	" dataIndex="hours_this_month" key="hours_this_month" />
          <Column title="Working hours last month" dataIndex="working_hours_last_month" key="working_hours_last_month" />
          <Column title="Hours this week	" dataIndex="hours_this_week" key="hours_this_week" />
          <Column title="Working hours last week" dataIndex="working_hours_last_week" key="working_hours_last_week" />
        </Table>
      </div>
    </div>
  );
}