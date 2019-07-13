import React from 'react';
import { Empty } from 'antd';


function TitleBoxLayout({ title, children }) {
  return (
    <div className="title-box-layout">
      <div className="title-box-layout__title">{title}</div>
      {
        children || <Empty />
      }
    </div>
  );
}

export default TitleBoxLayout;