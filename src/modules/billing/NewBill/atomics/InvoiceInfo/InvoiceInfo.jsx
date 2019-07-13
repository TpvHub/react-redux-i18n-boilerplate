import React from 'react';
import { Row, Col, Form, Input, Select, DatePicker } from 'antd';
const { TextArea } = Input;
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 10 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const formDateItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 10 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};


function InvoiceInfo(props) {
  const { getFieldDecorator } = props.form;

  return (
    <Row type="flex" justify="center">
      <Col xl={8} lg={12}>
        <Form.Item label="Customer" {...formItemLayout} className="u-mgb-15">
          {getFieldDecorator('customer', {
            rules: [],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Subscriber" {...formItemLayout} className="u-mgb-15">
          {getFieldDecorator('subscriber', {
            rules: [],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Invoice number" {...formItemLayout} className="u-mgb-15">
          {getFieldDecorator('invoice_number', {
            rules: [],
          })(<Input />)}
        </Form.Item>
      </Col>

      <Col xl={8} lg={12}>
        <Form.Item label="Billing address" {...formItemLayout} className="u-mgb-15">
          {getFieldDecorator('billing_address', {
            rules: [],
          })(<TextArea rows={4} />)}
        </Form.Item>

        <Form.Item label="Terms" {...formItemLayout} className="u-mgb-15">
          {getFieldDecorator('terms', {
            initialValue: 'cash',
            rules: [],
          })(
            <Select>
              <Option value="cash">Cash</Option>
              <Option value="fall">Fall</Option>
            </Select>,
          )}
        </Form.Item>
      </Col>

      <Col xl={8} lg={18}>
        <Form.Item label="Order Date" {...formDateItemLayout} className="u-mgb-15">
          {getFieldDecorator('order_date', {
            rules: [],
          })(<DatePicker />)}
        </Form.Item>

        <Form.Item label="Date of an invoice" {...formDateItemLayout} className="u-mgb-15">
          {getFieldDecorator('date_invoice', {
            rules: [],
          })(<DatePicker />)}
        </Form.Item>

        <Form.Item label="Due Date" {...formItemLayout} className="u-mgb-15">
          {getFieldDecorator('due_date', {
            initialValue: '0',
            rules: [],
          })(
            <Select>
              <Option value="0">Immediately</Option>
              <Option value="7">7 days</Option>
              <Option value="14">14 days</Option>
              <Option value="60">60 days</Option>
            </Select>,
          )}
        </Form.Item>
      </Col>
    </Row>
  );
}

export default InvoiceInfo;