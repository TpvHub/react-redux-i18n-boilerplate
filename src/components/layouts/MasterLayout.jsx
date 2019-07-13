import React, { useState, useEffect, useCallback } from 'react';
import { Layout } from 'antd';
import { test } from 'ramda';
import { withRouter, matchPath } from 'react-router';
import { Header, Footer, SubHeader } from './index';

const menu = [
  {
    key: 'timecard', path: '/worktime', label: 'Timecard', subMenu: [
      { key: 'timecard', path: '/worktime', label: 'Work time recording' },
      { key: 'hour-specification', path: '/worktime/hour-specification', label: 'Hour specification' },
      { key: 'hourly-report', path: '/worktime/hourly-report', label: 'Hourly report' },
    ]
  },
  {
    key: 'customers', path: '/customers', label: 'Customers', subMenu: [
      { key: 'customer-register', path: '/customers', label: 'Customer register' },
      { key: 'new-customer', path: '/customers/new-customer', label: 'Add new customer' },
    ]
  },
  {
    key: 'subscriptions', path: '/subscriptions', label: 'Subscriptions', subMenu: [
      { key: 'order-queue', path: '/subscriptions', label: 'Order queue' },
      { key: 'your-own-queue', path: '/subscriptions/your-own-queue', label: 'Your own queue' },
      { key: 'new-subscription', path: '/subscriptions/new-subscription', label: 'Add a new subscription' },
      { key: 'active', path: '/subscriptions/active', label: 'Active' },
      { key: 'requested-orders', path: '/subscriptions/requested-orders', label: 'Requested Offers' },
      { key: 'offers', path: '/subscriptions/offers', label: 'Offers' },
    ]
  },
  {
    key: 'billing', path: '/billing', label: 'Billing', subMenu: [
      { key: 'task-bill', path: '/billing', label: 'Task bill' },
      { key: 'new-bill', path: '/billing/new-bill', label: 'New bill' },
    ]
  },
  {
    key: 'stock', path: '/stock', label: 'Stock', subMenu: [
      { key: 'stock-management', path: '/stock', label: 'Stock management' },
      { key: 'stock-search', path: '/stock/stock-search', label: 'Stock search' },
    ]
  },
  {
    key: 'reports', path: '/reports', label: 'Reports', subMenu: [
      { key: '/reports/ledgers', path: '/reports', label: 'Ledgers' },
      { key: '/reports/sales-statistics', path: '/reports/sales-statistics', label: 'Sales statistics' },
      { key: '/reports/printing-sales', path: '/reports/printing-sales', label: 'Printing sales' },
    ]
  },
];

function MasterLayout({ children, ...props }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const [subActiveMenu, setSubActiveMenu] = useState(null);

  useEffect(() => {
    // Update the document title using the browser API
    const activeMenu = menu.find(menuItem => menuItem.subMenu.find(item =>
      matchPath(props.location.pathname, {
        path: item.path,
        exact: true,
        strict: false
      })
    ));

    if (activeMenu) {
      const activeSubMenu = activeMenu.subMenu.find(item => matchPath(props.location.pathname, {
        path: item.path,
        exact: true,
        strict: false
      }));
      if (activeSubMenu) {
        setSubActiveMenu(activeSubMenu.key);
      }
      setActiveMenu(activeMenu.key);
    } else {
      setActiveMenu(null);
    }
  }, [props.location.pathname]);

  const getSubMenu = useCallback((active) => {
    const menuItem = menu.find(item => item.key === active);
    return menuItem ? menuItem.subMenu : [];
  }, []);

  return (
    <Layout className="master-layout">
      <Header menu={menu} active={activeMenu} />
      <SubHeader menu={getSubMenu(activeMenu)} active={subActiveMenu} />
      <div className="master-layout__main">
        {children}
      </div>
      <Footer />
    </Layout>
  );
}

export default withRouter(MasterLayout);