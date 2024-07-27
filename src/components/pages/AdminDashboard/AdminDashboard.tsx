import React, { useState } from 'react';
import './AdminDashboard.css';
import SubmitPostForm from './SubmitPostForm';
import EditPostSection from './EditPostSection';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'create' | 'manage'>('create');

  const handleTabChange = (tab: 'create' | 'manage') => {
    setActiveTab(tab);
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="tabs">
        <button onClick={() => handleTabChange('create')}>Create Post</button>
        <button onClick={() => handleTabChange('manage')}>Manage Posts</button>
      </div>
      <div className="tab-content">
        {activeTab === 'create' && <SubmitPostForm  />}
        {activeTab === 'manage' && <EditPostSection />}
      </div>
    </div>
  );
};

export default AdminDashboard;
