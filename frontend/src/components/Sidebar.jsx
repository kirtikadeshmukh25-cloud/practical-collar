import React from 'react';
import './Sidebar.css';

export default function Sidebar({ active = 'Dashboard' }) {
  const links = [
    { icon: '🏠', label: 'Dashboard' },
    { icon: '🐾', label: 'My Animals' },
    { icon: '➕', label: 'Add Animal' },
    { icon: '👤', label: 'Profile' },
    { icon: '🚪', label: 'Logout' },
  ];
  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-icon">🐄</div>
        <h2>Livestock Collar<br/>Management System</h2>
      </div>
      <nav>
        {links.map(l => (
          <a key={l.label} className={`nav-link ${l.label === active ? 'active' : ''}`}>
            <span>{l.icon}</span> {l.label}
          </a>
        ))}
      </nav>
      <div className="barn">🏡🌾</div>
    </aside>
  );
}