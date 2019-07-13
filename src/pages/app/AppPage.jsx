import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { MasterLayout } from 'components/layouts';
import { NotFound } from 'elements/statics';

const WorktimePage = lazy(() => import('./worktime'));
const CustomersPage = lazy(() => import('./customers'));
const HomePage = lazy(() => import('./home'));
const BillingPage = lazy(() => import('./billing'));
const SubscriptionsPage = lazy(() => import('./subscriptions'));
const StockPage = lazy(() => import('./stock'));
const ReportsPage = lazy(() => import('./reports'));

export default function AppPage({ match }) {
  return (
    <MasterLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={`${match.path}worktime`} component={WorktimePage} />
          <Route path={`${match.path}customers`} component={CustomersPage} />
          <Route path={`${match.path}billing`} component={BillingPage} />
          <Route path={`${match.path}subscriptions`} component={SubscriptionsPage} />
          <Route path={`${match.path}stock`} component={StockPage} />
          <Route path={`${match.path}reports`} component={ReportsPage} />
          <Route exact path={`${match.path}`} component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </MasterLayout>
  );
}
