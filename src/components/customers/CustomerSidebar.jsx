import React from 'react';
import { Link } from 'react-router-dom';
import { List, Input, Button, Icon } from 'antd';

const data = [
  {
    title: 'Customer 1',
  },
  {
    title: 'Customer 2',
  },
  {
    title: 'Customer 3',
  },
  {
    title: 'Customer 4',
  },
  {
    title: 'Customer 1',
  },
  {
    title: 'Customer 2',
  },
  {
    title: 'Customer 3',
  },
  {
    title: 'Customer 4',
  },
  {
    title: 'Customer 1',
  },
  {
    title: 'Customer 2',
  },
  {
    title: 'Customer 3',
  },
  {
    title: 'Customer 4',
  },
];

function SearchInput() {
  return (
    <Input
      className="customers-sidebar__header__search"
      placeholder="Customer search"
      prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
    />
  );
}

export default function CustomerSidebar() {
  return (
    <div className="customers-sidebar">
      <List
        size="small"
        header={(
          <div className="customers-sidebar__header">
            <SearchInput />

            <Link to="/customers/new-customer">
              <Button className="customers-sidebar__header__new-button" icon="plus" shape="circle" />
            </Link>
          </div>
        )}
        footer={<div>Search found 5 customers</div>}
        bordered
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <Link to="/customers">
            <List.Item onClick={() => { }}>
              <div className="customers-sidebar__item__hightline"></div>
              <List.Item.Meta
                title={<b>{item.title}</b>}
                description="Ant design"
              />
            </List.Item>
          </Link>
        )}
      />
    </div>
  );
}