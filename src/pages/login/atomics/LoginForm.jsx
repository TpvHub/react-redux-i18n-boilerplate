import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ formData, onSubmit }) => {
  const [loginInfo, setLoginInfo] = useState({ email: formData.email, password: formData.password });

  const onChange = useCallback((e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value
    });
  }, [loginInfo]);

  const onFormSubmit = useCallback((e) => {
    e.preventDefault();
    onSubmit(loginInfo);
  }, [loginInfo, onSubmit]);

  return (
    <div className="login-form">
      <form action="" onSubmit={onFormSubmit}>
        <input name="email" type="text" placeholder="email" defaultValue={loginInfo.email} onChange={onChange} />
        <br />
        <input name="password" type="password" placeholder="password" defaultValue={loginInfo.password} onChange={onChange} />
        <br />
        <input type="submit" value={`${formData.isLoading ? 'Submitting' : 'Login'}`} />
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  formData: PropTypes.object,
  onSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
  formData: { email: null, password: null, isLoading: false, },
  onSubmit: () => null
};

export default LoginForm;