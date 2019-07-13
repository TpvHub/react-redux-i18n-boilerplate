import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { staticUrl } from 'config';

const Header = (props) => {
  return (
    <div className="header">
      <div className="app-container">
        <div className="header__content">
          <div className="header__logo">
            <Link to="/">
              <img src={staticUrl('assets/images/logo_new.png')} alt="" />
            </Link>
          </div>
          <div className="header__menu">
            <For each="item" of={props.menu}>
              <Link
                to={item.path}
                className={classNames('header__link', {
                  'header__link--active': props.active === item.key
                })}
                key={item.key}
              >{item.label}</Link>
            </For>
          </div>
          <div className="header__user">
            <p>User name</p>
            <Link to="">logout</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;