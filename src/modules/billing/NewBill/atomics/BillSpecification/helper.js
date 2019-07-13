import React from 'react';
import { Checkbox, Input, Select, Button, Icon, Dropdown, Menu } from 'antd';
const { Option } = Select;

const menu = (
  <Menu>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

export const renderHide = (text, record) => {
  const obj = {
    children: <Checkbox />,
    props: {},
  };

  if (record.isLastRow) { obj.children = null; }

  return obj;
};

export const renderJob = (text, record) => {
  const obj = {
    children: <Input />,
    props: {},
  };

  if (record.isLastRow) { obj.children = (
    <Button>
      <Icon type="plus" />
      <span>Add new line</span>
    </Button>
  ); }
  if (record.isLastRow) { obj.props.colSpan = 2; }

  return obj;
};

export const renderUnit = (text, record) => {
  const obj = {
    children: <Input />,
    props: {},
  };

  if (record.isLastRow) { obj.props.colSpan = 0; }

  return obj;
};

export const renderAmount = (text, record) => {
  const obj = {
    children: <Input />,
    props: {},
  };

  if (record.isLastRow) { obj.children = <strong>In total</strong>; }

  return obj;
};

export const renderPrice = (text, record) => {
  const obj = {
    children: <Input addonAfter="€" />,
    props: {},
  };

  if (record.isLastRow) { obj.children = <Input disabled addonAfter="€" />; }

  return obj;
};

export const renderVAT = (text, record) => {
  const obj = {
    children: (
      <Select>
        <Option value="24%">24%</Option>
        <Option value="13%">13%</Option>
      </Select>
    ),
    props: {},
  };

  if (record.isLastRow) { obj.children = null; }

  return obj;
};

export const renderTax = (text, record) => {
  const obj = {
    children: <Input addonAfter="€" />,
    props: {},
  };

  if (record.isLastRow) { obj.children = <Input disabled addonAfter="€" />; }

  return obj;
};

export const renderInTotal = (text, record) => {
  const obj = {
    children: <Input addonAfter="€" />,
    props: {},
  };

  if (record.isLastRow) { obj.children = <Input disabled addonAfter="€" />; }

  return obj;
};

export const renderActions = (text, record) => {
  const obj = {
    children: (
      <Dropdown overlay={menu} trigger={['click']}>
        <Button>
          <Icon type="setting" />
        </Button>
      </Dropdown>
    ),
    props: {},
  };

  if (record.isLastRow) { obj.children = null; }

  return obj;
};