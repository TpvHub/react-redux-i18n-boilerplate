import React from 'react';
import { Link } from 'react-router-dom';

export default function UserHeader() {
  return (
    <div className="user-header">
      <Link to="/user/dashboard">DASHBOARD</Link>
      <div>|</div>
      <Link to="/user/profile">PROFILE</Link>
    </div>
  );
}
