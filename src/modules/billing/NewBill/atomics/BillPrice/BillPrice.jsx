import React from 'react';
import { Row, Form, Input } from 'antd';

const formItemLayout = {
  labelCol: {
    sm: { span: 3 },
  },
  wrapperCol: {
    sm: { span: 21 },
  },
};

function BillPrice(props) {
  const { getFieldDecorator } = props.form;

  return (
    <Row>
      <Form.Item label="Free comment" {...formItemLayout} className="u-mgb-15">
        {getFieldDecorator('customer', {
          rules: [],
        })(<Input />)}
      </Form.Item>

      <Form.Item label="Agreed prices" {...formItemLayout} className="u-mgb-15">
        {getFieldDecorator('customer', {
          rules: [],
        })(<Input />)}
      </Form.Item>
    </Row>
  );
}

export default BillPrice;