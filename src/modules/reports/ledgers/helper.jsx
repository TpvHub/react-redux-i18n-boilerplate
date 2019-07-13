import React from 'react';

const emptyCol = {
  children: null,
  props: {
    colSpan: 0
  }
};

const isLastRow = record => record.isLastRow;

export const renderDate = (current, record, index) => {
  if (isLastRow(record)) {
    return {
      children: `Total ${index} invoice`,
      props: {
        colSpan: 2,
        // className: 'u-hightlight-xxx-light-gray'
      }
    };
  }
  return current;
};

export const renderLaskunro = (current, record) => {
  if (isLastRow(record)) return emptyCol;
  return current;
};

export const renderCustomer = (current, record) => {
  if (isLastRow(record)) return {
    children: <div>
      <div>Total (without tax) 0,00 €</div>
      <div>VAT total 0,00 €</div>
    </div>,
    props: {
      colSpan: 2
    }
  };
  return current;
};

export const renderReference = (current, record) => {
  if (isLastRow(record)) return emptyCol;
  return current;
};

export const renderExemptFromTaxation = (current, record) => {
  if (isLastRow(record)) return {
    children: <div>
      <div>Paid (without tax) 0,00 €</div>
      <div>VAT total 0,00 €</div>
    </div>,
    props: {
      colSpan: 3,
    }
  };
  return current;
};

export const renderVAT = (current, record) => {
  if (isLastRow(record)) return emptyCol;
  return current;
};

export const renderSum = (current, record) => {
  if (isLastRow(record)) return emptyCol;
  return current;
};

export const renderTerms = (current, record) => {
  if (isLastRow(record)) return {
    children: <div>
      <div>Unpaid (without taxes) 0,00 €</div>
      <div>VAT total 0,00 €</div>
    </div>,
    props: {
      colSpan: 3
    }
  };
  return current;
};

export const renderPayouts = (current, record) => {
  if (isLastRow(record)) return emptyCol;
  return current;
};

export const renderWriteReminderNote = (current, record) => {
  if (isLastRow(record)) return emptyCol;
  return current;
};

export const renderCreditNote = (current, record) => {
  if (isLastRow(record)) return {
    children: '',
    props: {
      colSpan: 3
    }
  };
  return <a href="">Credit note</a>;
};

export const renderInvoiceRelatedOrder = (current, record) => {
  if (isLastRow(record)) return emptyCol;
  return current;
};

export const renderViewInvoice = (current, record) => {
  if (isLastRow(record)) return emptyCol;
  return <a href="">Open the invoices</a>;
};
