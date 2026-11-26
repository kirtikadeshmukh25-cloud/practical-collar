import React, { useState } from 'react';
import './AddAnimalModal.css';

export default function AddAnimalModal({ onClose, onSave }) {
  const [form, setForm] = useState({
    tagNumber: '',
    breed: '',
    age: '',
    status: 'Healthy',
    collarActive: true
  });

  const submit = (e) => {
    e.preventDefault();
    onSave({ ...form, age: Number(form.age) });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New Animal</h2>
        <form onSubmit={submit}>
          <label>Tag Number</label>
          <input
            required
            value={form.tagNumber}
            onChange={(e) => setForm({ ...form, tagNumber: e.target.value })}
            placeholder="LC-005"
          />

          <label>Breed</label>
          <input
            required
            value={form.breed}
            onChange={(e) => setForm({ ...form, breed: e.target.value })}
            placeholder="Holstein"
          />

          <label>Age</label>
          <input
            required
            type="number"
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
            placeholder="4"
          />

          <label>Status</label>
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option>Healthy</option>
            <option>Sick</option>
            <option>Alert</option>
          </select>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-save">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}