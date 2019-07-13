import React from 'react';
import { ListRelease } from './atomics';

const HomeContainer = () => {
  return (
    <React.Fragment>
      <p>Last logged in at 2019-07-04 15:49:07 at ip address: 183.80.10.216</p>
      <div className="releases">
        <p className="releases__main-title">Releases</p>
        <div className="release__list">
          <ListRelease />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeContainer;