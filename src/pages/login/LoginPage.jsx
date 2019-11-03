import React from 'react';
import { connect } from 'react-redux';

// actions
import { authLogin } from 'redux/reducers/auth/actions';

import { MasterLayout } from 'components/layouts';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MasterLayout>
        <div className="login">
          <h1>LOGIN PAGE</h1>
        </div>
      </MasterLayout>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  authLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);