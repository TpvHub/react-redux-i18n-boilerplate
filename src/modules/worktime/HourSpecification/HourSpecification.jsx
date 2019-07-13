import React from 'react';
import {
  renderDate,
  renderCheckoutTime,
  renderDefinition,
  renderHours,
  renderLoginTime
} from './helper';
import { Table, Descriptions, Button, Icon } from 'antd';

const { Column } = Table;
const { Group: ButtonGroup } = Button;

const data = [
  {
    key: '1',
    date: '1.7. Friday',
    login_time: '4:09:36 p.m.',
    checkout_time: '4:14:41 p.m.',
    hours: '0:05',
    definition: '',
  },
  {
    key: '2',
    date: '2.7. Friday',
    login_time: '4:09:36 p.m.',
    checkout_time: '4:14:41 p.m.',
    hours: '0:05',
    definition: '',
  },
  {
    key: '3',
    date: '3.7. Friday',
    login_time: '4:09:36 p.m.',
    checkout_time: '4:14:41 p.m.',
    hours: '0:05',
    definition: '',
  },
  {
    key: '4',
    label: 'In Total',
    total: '32:47',
    isTotal: true
  },
  {
    key: '5',
    dateLabel: 'All hours total',
    checkoutTimeLabel: 'Total working days	',
    all_hours_total: '32:47',
    total_working_days: '3 (24h)',
    isAllHoursTotal: true
  },
];

const HourSpecification = () => {
  return (
    <div className="hour-specification">
      <div className="hour-specification__actions">
        <ButtonGroup>
          <Button type="primary">
            <Icon type="left" />
            <span>Previous month</span>
          </Button>
          <Button type="primary">Edit hours worked</Button>
          <Button type="primary">
            <span>Next month</span>
            <Icon type="right" />
          </Button>
        </ButtonGroup>
      </div>

      <div className="hour-specification__user-info">
        <Descriptions bordered>
          <Descriptions.Item span={3} label="User">atom</Descriptions.Item>
          <Descriptions.Item span={3} label="Week">27</Descriptions.Item>
          <Descriptions.Item span={3} label="Date">1.7.2019 - 5.7.2019</Descriptions.Item>
        </Descriptions>
      </div>

      <div className="hour-specification__table">
        <Table bordered dataSource={data} rowKey="key">
          <Column title="Date" dataIndex="date" key="date" render={renderDate} />
          <Column title="Login time" dataIndex="login_time" key="login_time" render={renderLoginTime} />
          <Column title="Check-out time" dataIndex="checkout_time" key="checkout_time" render={renderCheckoutTime} />
          <Column title="Hours" dataIndex="hours" key="hours" render={renderHours} />
          <Column title="Definition" dataIndex="definition" key="definition" render={renderDefinition} />
        </Table>
      </div>
    </div>
  );
}

export default HourSpecification;