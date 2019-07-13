import React from 'react';
import { Form, Input, Checkbox, Select, Button } from 'antd';
const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function ProductGroupModal(props) {
  const { getFieldDecorator } = props.form;

  return (
    <div className="product-group-modal">
      <h2 className="u-text-center">Add a new product group</h2>
      <Form>
        <Form.Item label="Customer" {...formItemLayout}>
          {getFieldDecorator('customer', {
            rules: [],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Stock Balance Tracking" {...formItemLayout}>
          {getFieldDecorator('stock_balance_tracking', {
            rules: [],
          })(<Checkbox />)}
        </Form.Item>

        <Form.Item label="Storage units" {...formItemLayout}>
          {getFieldDecorator('storage_units', {
            rules: [],
          })(<Checkbox />)}
        </Form.Item>

        <Form.Item label="Select columns" {...formItemLayout}>
          {getFieldDecorator('columns', {
            rules: [],
          })(
            <Select mode="tags" placeholder="Select columns">
              <Option value="product_code">Product code</Option>
              <Option value="product_code1">Product code</Option>
              <Option value="product_code2">Product code</Option>
              <Option value="product_code3">Product code</Option>
            </Select>
          )}
        </Form.Item>

        <Form.Item className="u-text-center">
          <Button type="primary" className="u-mgr-10">Save</Button>
          <Button>Brackets</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Form.create()(ProductGroupModal);