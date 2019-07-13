import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const SubHeader = (props) => {
  return (
    <div className="sub-header">
      <div className="app-container">
        <div className="sub-header__content">
          <For each="item" of={props.menu}>
            <Link key={item.key} to={item.path} className={classNames('sub-header__link', {
              'sub-header__link--active': item.key === props.active,
            })}>{item.label}</Link>
          </For>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;