import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ContentLayout } from 'components';

import {
  TaskBillPage,
  NewBillPage
} from './index';

export default function BillingPage({ match }) {
  return (
    <ContentLayout className="billing">
      <Switch>
        <Route path={`${match.url}/task-bill`} component={TaskBillPage} />
        <Route path={`${match.url}/new-bill`} component={NewBillPage} />
        <Route exact path={`${match.url}/`} component={TaskBillPage} />
      </Switch>
    </ContentLayout>
  );
}
