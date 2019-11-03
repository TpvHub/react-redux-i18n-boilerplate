import React from 'react';
import PropTypes from 'prop-types';

import { MasterLayout } from 'components/layouts';
import {
  LoginContainer
} from './containers';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLoginSucess = () => {
    this.props.history.push('/user/dashboard');
  }

  render() {
    return (
      <MasterLayout>
        <div className="login">
          <LoginContainer
            onLoginSuccess={this.handleLoginSucess}
          />
        </div>
      </MasterLayout>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.object.isRequired
};

export default LoginPage;