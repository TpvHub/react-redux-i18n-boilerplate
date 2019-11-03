import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// atomics
import { LoginForm } from '../atomics';

// actions
import { authLogin } from 'redux/reducers/auth/actions';

const LoginContainer = ({ loginState, authLogin, onLoginSuccess }) => {

  const handleSubmitForm = useCallback((formData) => {
    authLogin(formData).then(onLoginSuccess);
  }, [authLogin, onLoginSuccess]);

  return (
    <React.Fragment>
      <LoginForm formData={loginState} onSubmit={handleSubmitForm} />
    </React.Fragment>
  );
};

LoginContainer.propTypes = {
  loginState: PropTypes.object.isRequired,
  authLogin: PropTypes.func.isRequired,
  onLoginSuccess: PropTypes.func
};

LoginContainer.defaultProps = {
  onLoginSuccess: () => null
};

const mapStateToProps = (state) => ({
  loginState: state.auth.loginState,
});
const mapDispatchToProps = {
  authLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);