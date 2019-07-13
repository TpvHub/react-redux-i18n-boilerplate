import React from 'react';
import { ContentLayout } from 'components/layouts';
import { HomeContainer } from 'modules/home';

function HomePage() {
  return (
    <ContentLayout className="home">
      <HomeContainer />
    </ContentLayout>
  );
}

export default HomePage;