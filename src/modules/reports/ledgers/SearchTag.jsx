import React from 'react';
import { Form, Input } from 'antd';
const { Search } = Input;
function ControlBar(props) {
  const { getFieldDecorator } = props.form;

  return (
    <div className="control-bar">
      <Form>
        <div className="control-bar__form">
          <Form.Item label="Search">
            {getFieldDecorator('name', {
              rules: [
              ],
            })(<Search placeholder="Invoice of reference number" enterButton/>)}
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export default Form.create({ name: 'register' })(ControlBar);