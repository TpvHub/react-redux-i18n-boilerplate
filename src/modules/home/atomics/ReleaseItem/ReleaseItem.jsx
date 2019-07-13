import React from 'react';
import { Menu } from 'antd';
const { SubMenu } = Menu;

const ReleaseItem = () => {
  return (
    <div className="release-item">
      <Menu mode="inline" className="release-item__menu">
        <SubMenu
          className="release-item__sub-menu"
          title={
            <span className="release-item__main-title">Rule 1.8.9 updated (18.2.2018)</span>
          }
        >
          <Menu.Item>
            <span className="release-item__sub-title release-item__sub-title--markable">
              Now, the new payments made by the date of payment will be applied for correctly paid.
            </span>
          </Menu.Item>
          <Menu.Item className="release-item__sub-title">
            <span className="release-item__sub-title release-item__sub-title--markable">
              Corrected search for paid and unpaid invoices in your account.
            </span>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default ReleaseItem;