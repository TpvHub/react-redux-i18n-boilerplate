import React from 'react';
import classNames from 'classnames';

function ContentLayout({ children, className }) {
  return (
    <div className={className}>
      <div className="app-container h-100">
        <div className={classNames('app-content h-100', {
          [`${className}__content`]: className
        })}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ContentLayout;