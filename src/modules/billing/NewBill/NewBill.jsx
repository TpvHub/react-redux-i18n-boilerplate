import React from 'react';
import { Form, Button } from 'antd';

import { InvoiceInfo, BillSpecification, BillPrice } from './atomics';

function NewBill(props) {
  return (
    <div className="new-bill">
      <div className="card-title">Invoice details</div>
      <Form className="new-bill__invoice-info">
        <InvoiceInfo form={props.form} />
        <div className="new-bill__table">
          <BillSpecification />
        </div>
        <BillPrice form={props.form} />
        <div className="new-bill__actions">
          <Button type="primary">Save</Button>
          <Button type="primary" className="u-mgx-10">Preview</Button>
          <Button type="primary">Accept invoice</Button>
        </div>
      </Form>
    </div>
  );
}

export default Form.create({ name: 'new-bill' })(NewBill);