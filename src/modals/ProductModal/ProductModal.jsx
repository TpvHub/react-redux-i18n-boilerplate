import React from 'react';
import { Form, Input, Select, Button, Upload, Icon } from 'antd';
const { TextArea } = Input;
const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function ProductModal(props) {
  const { getFieldDecorator } = props.form;

  return (
    <div className="product-modal">
      <h2 className="u-text-center">Add a new product</h2>
      <Form>
        <Form.Item label="Product code	" {...formItemLayout}>
          {getFieldDecorator('product_code	', {
            rules: [],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Name" {...formItemLayout}>
          {getFieldDecorator('name	', {
            rules: [],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Additional Information	" {...formItemLayout}>
          {getFieldDecorator('additional_information	', {
            rules: [],
          })(<TextArea />)}
        </Form.Item>

        <Form.Item label="Shelf Location	" {...formItemLayout}>
          {getFieldDecorator('shelf_location', {
            rules: [],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Selling price	" {...formItemLayout}>
          <div className="product-modal__selling-price">
            {getFieldDecorator('setlling_price', {
              initialValue: 'tax_free_price',
              rules: [],
            })(
              <Select>
                <Option value="tax_free_price">Tax free price</Option>
                <Option value="product_code1">Price including tax</Option>
              </Select>
            )}

            {getFieldDecorator('price', {
              rules: [],
            })(<Input className="u-mgl-10" />)}
          </div>

          <div className="product-modal__selling-price u-mgt-10">
            <div className="product-modal__selling-price-output">
              <label>Tax free price</label>
              {getFieldDecorator('name	', {
                rules: [],
              })(<Input disabled />)}
            </div>

            <div className="product-modal__selling-price-output u-mgl-10">
              <label>Price including tax</label>
              {getFieldDecorator('name	', {
                rules: [],
              })(<Input disabled />)}
            </div>
          </div>
        </Form.Item>

        <Form.Item label="VAT" {...formItemLayout}>
          {getFieldDecorator('vat	', {
            rules: [],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Purchase price	" {...formItemLayout}>
          {getFieldDecorator('purchase_price', {
            rules: [],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Amount" {...formItemLayout}>
          {getFieldDecorator('amount', {
            rules: [],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Busy" {...formItemLayout}>
          {getFieldDecorator('busy	', {
            rules: [],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Unit" {...formItemLayout}>
          {getFieldDecorator('unit', {
            rules: [],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Paper size" {...formItemLayout}>
          {getFieldDecorator('paper_size', {
            rules: [],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Paper thickness" {...formItemLayout}>
          {getFieldDecorator('paper_thickness', {
            rules: [],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Picture" {...formItemLayout}>
          {getFieldDecorator('picture', {
            rules: [],
          })(
            <Upload>
              <Button>
                <Icon type="upload" />
                <span>Click to Upload</span>
              </Button>
            </Upload>
          )}
        </Form.Item>

        <Form.Item className="u-text-center u-mgt-15">
          <Button type="primary" className="u-mgr-10">Save</Button>
          <Button>Brackets</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Form.create()(ProductModal);