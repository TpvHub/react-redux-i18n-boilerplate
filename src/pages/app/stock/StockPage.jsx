import React from 'react';
import { ContentLayout } from 'components';
import { Switch, Route } from 'react-router-dom';

import { StockManagementPage, StockSearchPage } from './index';

function StockPage({ match }) {
  return (
    <ContentLayout className="stock">
      <Switch>
        <Route path={`${match.url}/stock-search`} component={StockSearchPage} />
        <Route path={`${match.url}/stock-management`} component={StockManagementPage} />
        <Route exact path={`${match.url}`} component={StockManagementPage} />
      </Switch>
    </ContentLayout>
  );
}

export default StockPage;