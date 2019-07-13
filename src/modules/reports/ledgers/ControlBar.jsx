import React from 'react';
import { Form, Input, Button, Row, Col, Select, DatePicker } from 'antd';

const { Option } = Select;

const years = [2011, 2012, 2013, 2014, 2015, 2016];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function ControlBar(props) {
  const { getFieldDecorator } = props.form;
  const cols = [
   
    {
      Component: <Form.Item label="Year">
        {getFieldDecorator('year', {
          rules: [],
        })(
          <Select>
            {
              years.map(year => (
                <Option key={year} value={year}>{year}</Option>
              ))
            }
          </Select>
          // <DatePicker mode="year" />
        )}
      </Form.Item>
    },
    {
      Component: <Form.Item label="Month">
        {getFieldDecorator('month', {
          rules: [],
        })(
          <Select>
            {
              months.map(month => (
                <Option key={month} value={month}>{month}</Option>
              ))
            }
          </Select>
          // <MonthPicker />
        )}
      </Form.Item>
    },
    {
      span: 1,
      Component: <Form.Item label="Customer">
        {getFieldDecorator('name', {
          rules: [],
        })(
          <Button icon="left" />
        )}
      </Form.Item>
    },
    {
      span: 1,
      Component: <Button icon="right" />
    },
    {
      span: 6,
      Component: <Form.Item label="Customer">
        {getFieldDecorator('name', {
          rules: [],
        })(
          <Input />
        )}
      </Form.Item>
    },
  ];

  return (
    <div className="control-bar">
      <Form>
        <div className="control-bar__form">
          <Form.Item label="Payment status">
            {getFieldDecorator('payment_status', {
              initialValue: 'all',
              rules: [],
            })(
              <Select>
                <Option value="all">All</Option>
                <Option value="n-paid">Not paid</Option>
                <Option value="paid">Paid</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="Interval">
            {getFieldDecorator('interval', {
              initialValue: 'month',
              rules: [],
            })(
              <Select>
                <Option value="month">Month</Option>
                <Option value="year">Year</Option>
                <Option value="all">All</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="Time">
            {getFieldDecorator('date-time', {
              rules: [],
            })(
              <DatePicker />
            )}
          </Form.Item>
          <Form.Item label="Search">
            {getFieldDecorator('customer-name', {
              rules: [],
            })(
              <Input />
            )}
          </Form.Item>
          {/* <div>
            <Button icon="left" />
            <Button icon="right" />
          </div> */}
        </div>
      </Form>
    </div>
  );
}

export default Form.create({})(ControlBar);