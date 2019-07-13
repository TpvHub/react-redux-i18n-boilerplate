import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ContentLayout } from 'components';

import {
  HourSpecificationPage,
  HourlyReportPage,
  TimeCardPage
} from './index';

export default function WorktimePage({ match }) {
  return (
    <ContentLayout className="worktime">
      <Switch>
        <Route path={`${match.url}/hour-specification`} component={HourSpecificationPage} />
        <Route path={`${match.url}/hourly-report`} component={HourlyReportPage} />
        <Route exact path={`${match.url}/`} component={TimeCardPage} />
      </Switch>
    </ContentLayout>
  );
}
