import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ContentLayout } from 'components';
import { NotFound } from 'elements/statics';

// pages
import {
  LedgersPage,
  SalesStatisticsPage,
  PrintingSalesPage
} from './index';

export default function ReportsPage({ match }) {
  return (
    <ContentLayout className="reports">
      <Switch>
        <Route path={`${match.path}/ledgers`} component={LedgersPage} />
        <Route path={`${match.path}/sales-statistics`} component={SalesStatisticsPage} />
        <Route path={`${match.path}/printing-sales`} component={PrintingSalesPage} />
        <Route exact path={`${match.path}`} component={LedgersPage} />
        <Route component={NotFound} />
      </Switch>
    </ContentLayout>
  );
}