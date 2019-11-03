import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  Header, Footer
} from 'components/layouts/user';

export default function UserLayout({ onClickLogout, children }) {
  return (
    <Fragment>
      <Header />
      {
        children ? children : null
      }
      <Footer onClickLogout={onClickLogout} />
    </Fragment>
  );
}

UserLayout.propTypes = {
  onClickLogout: PropTypes.func,
  children: PropTypes.any,
};

UserLayout.defaultProps = {
  children: null,
  onClickLogout: () => null
};