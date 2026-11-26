import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import AnimalTable from '../components/AnimalTable';
import AddAnimalModal from '../components/AddAnimalModal';
import './Dashboard.css';

const API = 'http://localhost:5000/api';

export default function Dashboard() {
  const [animals, setAnimals] = useState([]);
  const [stats, setStats] = useState({ total: 0, healthy: 0, collars: 0, alerts: 0 });
  const [showModal, setShowModal] = useState(false);

  const load = async () => {
    const [a, s] = await Promise.all([
      axios.get(`${API}/animals`),
      axios.get(`${API}/animals/stats`)
    ]);
    setAnimals(a.data);
    setStats(s.data);
  };

  useEffect(() => { load(); }, []);

  const handleAdd = async (data) => {
    await axios.post(`${API}/animals`, data);
    setShowModal(false);
    load();
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this animal?')) return;
    await axios.delete(`${API}/animals/${id}`);
    load();
  };

  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <header className="topbar">
          <div className="hero">
            <h1>Welcome, Farmer!</h1>
            <p>Manage your livestock records easily and securely.</p>
          </div>
          <div className="user">👤 John Doe ⌄</div>
        </header>

        <div className="stats-row">
          <StatCard icon="🐾" label="Total Animals"   value={stats.total}   bg="#e8f8ee" />
          <StatCard icon="🐄" label="Healthy Animals" value={stats.healthy} bg="#e6f0fb" />
          <StatCard icon="🛡️" label="Active Collars"  value={stats.collars} bg="#efe9fb" />
          <StatCard icon="🔔" label="Alerts"          value={stats.alerts}  bg="#fdf3e3" />
        </div>

        <AnimalTable
          animals={animals}
          onAdd={() => setShowModal(true)}
          onEdit={() => {}}
          onDelete={handleDelete}
        />

        {showModal && (
          <AddAnimalModal onClose={() => setShowModal(false)} onSave={handleAdd} />
        )}
      </main>
    </div>
  );
}