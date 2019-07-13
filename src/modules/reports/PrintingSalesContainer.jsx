import React from 'react';
import { Row, Col, DatePicker, Select, Button, Icon } from 'antd';
import {
  TitleBoxLayout
} from './seles-statistics';

const { RangePicker } = DatePicker;
const { Option } = Select;

export default function PrintingSalesContainer() {
  const [isShowChart, setIsShowChart] = React.useState(false);

  return (
    <div className="printing-sales">
      <div className="card-title">Product Sales Statistics</div>
      <div className="printing-sales__content u-mgt-15">
        <If condition={!isShowChart}>
          <TitleBoxLayout title="Search criteria">
            <Row className="u-mgb-15" type="flex" align="middle" >
              <Col span={8}>Interval:</Col>
              <Col span={15}><RangePicker /></Col>
            </Row>
            <Row className="u-mgb-15" type="flex" align="middle">
              <Col span={8}>Choose:</Col>
              <Col span={15}>
                <Button className="u-mgr-10">In this month</Button>
                <Button className="u-mgr-10">This year</Button>
                <Button className="u-mgr-10">All</Button>
              </Col>
            </Row>
            <Row className="u-mgb-15" type="flex" align="middle">
              <Col span={8}><Button><Icon type="printer" /> Print Sales </Button></Col>
            </Row>
            <Row className="u-mgb-15" type="flex" align="middle">
              <Col span={8}>Draw a sales chart:</Col>
              <Col span={15}>
                <Select defaultValue="all" style={{ width: 100 }}>
                  <Option value="all">All</Option>
                  <Option value="rule">Rule</Option>
                  <Option value="papper">Papper</Option>
                </Select>
              </Col>
            </Row>
            <Row type="flex" align="middle">
              <Col span={8}><Button onClick={() => { setIsShowChart(true); }}><Icon type="bar-chart" /> Draw a graph</Button></Col>
            </Row>
          </TitleBoxLayout>
        </If>
      </div>
      <If condition={isShowChart}>
        <div className="static-chart">
          <div><Button onClick={() => { setIsShowChart(false); }} icon="left" /></div>
          <div className="static-chart__img"><img src="/assets/images/static-chart.png" alt="" /></div>
        </div>
      </If>
    </div>
  );
}