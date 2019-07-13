import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HourSpecification, EditHourSpecification } from 'modules';

const HourSpecificationPage = ({ match }) => {
  return (
    <div className="hour-specification-page">
      <div className="card-title">Hour Specification</div>
      <Switch>
        <Route path={`${match.path}/edit`} component={EditHourSpecification} />
        <Route exact path={`${match.path}`} component={HourSpecification} />
      </Switch>
    </div>
  );
}

export default HourSpecificationPage;