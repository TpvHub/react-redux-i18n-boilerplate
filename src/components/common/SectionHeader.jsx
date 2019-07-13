import React from 'react';

export default function SectionHeader({ title, extraIcon }) {
  return (
    <div className="section_header">
      <h2 className="section_header__title">{title}</h2>
      {
        extraIcon ? extraIcon : ''
      }
    </div>
  );
}