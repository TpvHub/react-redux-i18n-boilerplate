import React, { useState } from 'react';
import SubscriptionStep from 'components/SubscriptionStep';

import { Row, Col, Input, Button, Checkbox } from 'antd';

const { TextArea } = Input;

const defaultTabs = [
  { key: 'information', title: 'Customer Information' },
  { key: 'add/edit', title: 'Add / Edit Job Information', disabled: true },
  { key: 'jobs', title: 'Jobs', disabled: true },
  { key: 'billing', title: 'Billing', disabled: true },
];

function CustomerInformation() {
  return (
    <div className="customer-information">
      <div className="customer-information__content">
        <p className="customer-information__content__title"><b>customer Information</b></p>
        <p>Find and select a customer from a customer register or enter the name of a private customer:</p>
        <Row>
          <Col className="u-text-bold" span={8}>Customer:</Col>
          <Col span={8}><Input /></Col>
          <Col className="u-text-right" span={8}><Button>Add new customer</Button></Col>
        </Row>
        <Row>
          <Col className="u-text-bold" span={8}>Subscriber:</Col>
          <Col span={8}><Input /></Col>
          <Col span={8}></Col>
        </Row>
        <Row>
          <Col className="u-text-bold" span={8}>Billing address:</Col>
          <Col span={8}><TextArea rows={4} /></Col>
          <Col span={8}></Col>
        </Row>
        <Row>
          <Col className="u-text-bold" span={8}>Delivery / shipping address</Col>
          <Col span={8}><TextArea rows={4} /></Col>
          <Col span={8}></Col>
        </Row>
        <Row>
          <Col span={8}></Col>
          <Col span={8}><Checkbox >Same as billing address</Checkbox></Col>
          <Col span={8}></Col>
        </Row>
      </div>
    </div>
  );
}

export default function NewSubscriptionPage() {
  const [tabs, updateTabs] = useState(defaultTabs);

  return (
    <div className="">
      <SubscriptionStep tabs={tabs} currentTab={tabs[0]}>
        <CustomerInformation />
      </SubscriptionStep>
    </div>
  );
}