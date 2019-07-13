import React from 'react';
import { Table, Row, Checkbox, Input, Select, Button, Icon, Dropdown, Menu } from 'antd';
const { Option } = Select;
const { Column } = Table;

import {
  renderHide,
  renderJob,
  renderUnit,
  renderAmount,
  renderPrice,
  renderVAT,
  renderTax,
  renderInTotal,
  renderActions
} from './helper';

const data = [
  {
    key: 1,
    hide: false,
    job: '',
    unit: '',
    amout: '',
    price: '',
    vat: '',
    tax: '',
    in_total: '',
  },
  {
    key: 2,
    isLastRow: true,
  }
];

function BillSpecification() {
  return (
    <Row>
      <Table
        bordered
        title={() => <strong>Bill specification</strong>}
        expandIcon={() => null}
        expandedRowRender={() => '123'}
        expandedRowKeys={[]}
        dataSource={data}
        className="table-hide-expand"
        pagination={false}
        scroll={{ x: 1024 }}
      >
        <Column align="center" width={20} title="Hide" render={renderHide}></Column>
        <Column width={200} title="Job" render={renderJob}></Column>
        <Column width={100} title="Unit" render={renderUnit}></Column>
        <Column width={100} title="Amount" render={renderAmount}></Column>
        <Column width={120} title="Price" render={renderPrice}></Column>
        <Column width={120} title="VAT-%" render={renderVAT}></Column>
        <Column width={120} title="Tax" render={renderTax}></Column>
        <Column width={120} title="In total" render={renderInTotal}></Column>
        <Column align="center" width={20} render={renderActions}></Column>
      </Table>
    </Row>
  );
}

export default BillSpecification;