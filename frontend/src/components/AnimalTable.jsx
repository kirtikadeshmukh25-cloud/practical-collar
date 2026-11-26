import React from 'react';
import './AnimalTable.css';

export default function AnimalTable({ animals, onEdit, onDelete, onAdd }) {
  return (
    <div className="table-wrap">
      <div className="table-head">
        <h2>🐾 My Animals</h2>
        <button className="btn-add" onClick={onAdd}>+ Add Animal</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th><th>Tag Number</th><th>Breed</th>
            <th>Age</th><th>Status</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {animals.length === 0 && (
            <tr><td colSpan="6" style={{textAlign:'center', padding:20}}>No animals found</td></tr>
          )}
          {animals.map((a, i) => (
            <tr key={a._id}>
              <td>{i + 1}</td>
              <td>{a.tagNumber}</td>
              <td>{a.breed}</td>
              <td>{a.age}</td>
              <td><span className={`badge ${a.status.toLowerCase()}`}>{a.status}</span></td>
              <td>
                <button className="btn-edit" onClick={() => onEdit(a)}>✏️</button>
                <button className="btn-del" onClick={() => onDelete(a._id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="table-footer">Showing 1–{animals.length} of {animals.length} animals</p>
    </div>
  );
}