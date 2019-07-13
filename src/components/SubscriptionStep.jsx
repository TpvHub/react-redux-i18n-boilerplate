import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Empty } from 'antd';

function SubscriptionStep({
  tabs,
  onClickTab,
  children,
  currentTab
}) {
  const tabClick = useCallback((item) => () => {
    if (!item.disabled) {
      onClickTab(item);
    }
  }, [onClickTab]);

  return (
    <div className="subscription-step">
      <div className="subscription-step__header">
        {
          tabs.map(item => (
            <div
              key={item.key}
              className={classNames('subscription-step__tab', {
                'subscription-step__tab--active': item.key === currentTab.key,
                'subscription-step__tab--disabled': item.disabled
              })}
              onClick={tabClick(item)}
            >{item.title}</div>
          ))
        }
      </div>
      <div className="subscription-step__body">
        {children}
      </div>
    </div>
  );
}

SubscriptionStep.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    title: PropTypes.string,
  })),
  onClickTab: PropTypes.func,
  children: PropTypes.node,
  currentTab: PropTypes.object,
};

SubscriptionStep.defaultProps = {
  tabs: [
    { key: 'information', title: 'Customer Information' },
    { key: 'add/edit', title: 'Add / Edit Job Information', disabled: true },
    { key: 'jobs', title: 'Jobs', disabled: true },
    { key: 'billing', title: 'Billing', disabled: true },
  ],
  onClickTab: console.log,
  children: <Empty />,
  currentTab: {}
};

export default SubscriptionStep;