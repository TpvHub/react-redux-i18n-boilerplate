import React, { Suspense, lazy, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { UserLayout } from 'components/layouts';
import { NotFound } from 'pages/statics';

import { authLogout } from 'redux/reducers/auth/actions';

const DashboardPage = lazy(() => import('./dashboard'));
const ProfilePage = lazy(() => import('./profile'));

function UserPage({ history, match, authLogout }) {
  const handleLogout = useCallback(() => {
    authLogout();
    history.push('/login');
  }, [authLogout, history]);

  return (
    <UserLayout
      onClickLogout={handleLogout}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={`${match.path}/dashboard`} component={DashboardPage} />
          <Route exact path={`${match.path}/profile`} component={ProfilePage} />
          <Route exact path={`${match.path}`} component={DashboardPage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </UserLayout>
  );
}

UserPage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  authLogout: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  authLogout
};

export default connect(null, mapDispatchToProps)(UserPage);