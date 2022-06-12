import React from 'react';
import './settings.scss';

const Settings = () => {
  return (
    <div className="settings">
      <div className="heading">SETTINGS</div>
      <div className="text">
        <span>Test Participation</span>
        <span>Manage download devices</span>
        <span>Recent device streaming activity</span>
        <span>Sign out of all devices</span>
        <span>Download your personal information</span>
      </div>
    </div>
  );
};

export default Settings;
