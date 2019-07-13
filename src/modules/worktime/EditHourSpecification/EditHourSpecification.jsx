import React, { useState } from 'react';
import { Table, Descriptions, Button, Icon, Select, Form } from 'antd';

const { Column } = Table;
const { Option } = Select;
const { Group: ButtonGroup } = Button;

const fakeData = [
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
];

const EditHourSpecification = (props) => {
  const [data, setData] = useState(fakeData);

  const { getFieldDecorator } = props.form;
  return (
    <Form className="hour-specification">
      <div className="hour-specification__actions">
        <ButtonGroup>
          <Button type="primary">
            <Icon type="left" />
            <span>Previous month</span>
          </Button>
          <Button type="primary">Back</Button>
          <Button type="primary">
            <span>Next month</span>
            <Icon type="right" />
          </Button>
        </ButtonGroup>
      </div>

      <div className="hour-specification__user-info">
        <Descriptions bordered>
          <Descriptions.Item span={3} label="User">
            <Form.Item style={{ width: 200 }}>
              {getFieldDecorator('user', {
                initialValue: 'atom',
                rules: [],
              })(
                <Select>
                  <Option value="atom">atom</Option>
                  <Option value="root">root</Option>
                </Select>
              )}
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item span={3} label="Week">27</Descriptions.Item>
          <Descriptions.Item span={3} label="Date">1.7.2019 - 5.7.2019</Descriptions.Item>
        </Descriptions>
      </div>

      <div className="hour-specification__table">
        <Table bordered dataSource={data} rowKey="key">
          <Column title="Date" dataIndex="date" key="date" />
          <Column title="Login time" dataIndex="login_time" key="login_time" />
          <Column title="Check-out time" dataIndex="checkout_time" key="checkout_time" />
          <Column title="Hours" dataIndex="hours" key="hours" />
          <Column title="Definition" dataIndex="definition" key="definition" />
          <Column title="Delete" />
        </Table>
      </div>
    </Form>
  );
}

export default Form.create()(EditHourSpecification);