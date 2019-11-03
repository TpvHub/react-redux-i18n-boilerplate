import React from 'react';
import PropTypes from 'prop-types';

export default function UserFooter({ onClickLogout }) {
  return (
    <div className="user-footer">
      <button onClick={onClickLogout}>Logout</button>
    </div>
  );
}

UserFooter.propTypes = {
  onClickLogout: PropTypes.func
};

UserFooter.defaultProps = {
  onClickLogout: () => null
};