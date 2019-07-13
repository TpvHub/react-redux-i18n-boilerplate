import React from 'react';
import { Row, Col, DatePicker, Select, Button, Icon } from 'antd';
import {
  TitleBoxLayout
} from './seles-statistics';

const { RangePicker } = DatePicker;
const { Option } = Select;

export default function SalesStatisticsContainer() {
  return (
    <div className="sales-statistics">
      <div className="card-title">Product Sales Statistics</div>
      <div className="sales-statistics__content u-mgt-15">
        <TitleBoxLayout title="Search criteria">
          <Row className="u-mgb-10" type="flex" align="middle" >
            <Col span={6}>Time Range:</Col>
            <Col span={15}><RangePicker /></Col>
          </Row>
          <Row className="u-mgb-10" type="flex" align="middle">
            <Col span={6}>Choose:</Col>
            <Col span={15}>
              <Button className="u-mgr-10">In this month</Button>
              <Button className="u-mgr-10">This year</Button>
              <Button className="u-mgr-10">All</Button>
            </Col>
          </Row>
          <Row className="u-mgb-10" type="flex" align="middle">
            <Col span={6}>Goods:</Col>
            <Col span={15}>
              <Select defaultValue="all" style={{ width: 100 }}>
                <Option value="all">All</Option>
                <Option value="rule">Rule</Option>
                <Option value="papper">Papper</Option>
              </Select>
            </Col>
          </Row>
          <Row type="flex" align="middle">
            <Col span={6}><Button><Icon type="search" /> Search </Button></Col>
          </Row>

        </TitleBoxLayout>
      </div>
    </div>
  );
}