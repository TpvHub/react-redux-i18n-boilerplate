import React from 'react';
import { Table } from 'antd';


import {
  renderDate,
  renderLaskunro,
  renderCustomer,
  renderReference,
  renderExemptFromTaxation,
  renderVAT,
  renderSum,
  renderTerms,
  renderPayouts,
  renderWriteReminderNote,
  renderCreditNote,
  renderInvoiceRelatedOrder,
  renderViewInvoice,
} from './helper';

const { Column } = Table;

const data = [
  {
    key: 1,
    date: '07/04/2019',
    laskunro: '1153',
    customer: 'customer',
    reference: 'Reference',
    taxation: '€ 0.00',
    vat: '€ 0.00',
    sum: '€ 0.00',
    terms: 'Cash',
    payouts: 'Paid',
    reminder_note: 'Paid',
    invoice_order: '',
  },
  {
    key: 2,
    isLastRow: true
  }
];

const paginationConfig = {
  pageSize: 5,
  total: data.length
};

function LedgersTable() {
  return (
    <Table bordered dataSource={data} pagination={paginationConfig} scroll={{ x: 1280 }}>
      <Column title="Date" dataIndex="date" key="date" render={renderDate} />
      <Column title="Laskunro" dataIndex="laskunro" key="laskunro" render={renderLaskunro} />
      <Column title="Customer" dataIndex="customer" key="customer" render={renderCustomer} />
      <Column title="Reference" dataIndex="reference" key="reference" render={renderReference} />
      <Column title="Exempt from taxation" dataIndex="taxation" key="taxation" render={renderExemptFromTaxation} />
      <Column title="VAT" dataIndex="vat" key="vat" render={renderVAT} />
      <Column title="Sum" dataIndex="sum" key="sum" render={renderSum} />
      <Column title="terms" dataIndex="terms" key="terms" render={renderTerms} />
      <Column title="Payouts" dataIndex="payouts" key="Payouts" render={renderPayouts} />
      <Column title="Write a reminder note" dataIndex="reminder_note" key="reminder_note" render={renderWriteReminderNote} />
      <Column title="Enter a credit note" dataIndex="date" key="Enter a credit note" render={renderCreditNote} />
      <Column title="Invoice related order" dataIndex="invoice_order" key="invoice_order" render={renderInvoiceRelatedOrder} />
      <Column title="Viewing an Invoice" dataIndex="date" key="Viewing an Invoice" render={renderViewInvoice} />
    </Table>
  );
}

export default LedgersTable;