import React from 'react';
import { ReleaseItem } from '../index';

const ListRelease = () => {
  return (
    <div className="list-release">
      {Array(10).fill().map((_, i) => (
        <ReleaseItem key={i} />
      ))}
    </div>
  );
};

export default ListRelease;