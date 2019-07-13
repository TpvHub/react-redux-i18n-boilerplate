import React from 'react';
import { Input, Form, Button } from 'antd';

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function StockSearch(props) {
  const { getFieldDecorator } = props.form;

  return (
    <div className="stock-search">
      <div className="card-title">Stocks by product group</div>
      <div className="stock-search__form">
        <Form>
          <Form.Item label="Product ID" {...formItemLayout}>
            {getFieldDecorator('product_code	', {
              rules: [],
            })(<Input />)}
          </Form.Item>

          <Form.Item label="Product name" {...formItemLayout}>
            {getFieldDecorator('name	', {
              rules: [],
            })(<Input />)}
          </Form.Item>

          <Form.Item label="Product group" {...formItemLayout}>
            {getFieldDecorator('additional_information	', {
              rules: [],
            })(<Input />)}
          </Form.Item>

          <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
            <Button type="primary">Search</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Form.create()(StockSearch);