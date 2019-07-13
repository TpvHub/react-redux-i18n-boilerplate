import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ContentLayout } from 'components';

import {
  CustomerDetail,
  NewCustomer
} from './index';

// components
import {
  CustomerSidebar
} from 'components/customers';

function NotFound() {
  return (
    <div>
      NotFound
    </div>
  );
}

class CustomersPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ContentLayout className="customers">
        <CustomerSidebar />
        <Switch>
          <Route path="/customers/new-customer" component={NewCustomer} />
          <Route path="/customers" component={CustomerDetail} />
          <Route component={NotFound} />
        </Switch>
      </ContentLayout>
    );
  }
}

export default CustomersPage;