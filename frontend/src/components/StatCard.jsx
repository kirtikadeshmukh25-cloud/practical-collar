import React from 'react';
import './StatCard.css';

export default function StatCard({ icon, label, value, bg }) {
  return (
    <div className="stat-card" style={{ background: bg }}>
      <div className="stat-icon">{icon}</div>
      <div>
        <p className="stat-label">{label}</p>
        <h2 className="stat-value">{value}</h2>
      </div>
    </div>
  );
}