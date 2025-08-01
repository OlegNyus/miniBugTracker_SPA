import React, { useState } from 'react';
import { Bug, BugStatus, BugPriority } from '../types';

interface BugTableProps {
  bugs: Bug[];
  onUpdateBug: (id: string, updates: Partial<Bug>) => void;
  onDeleteBug: (id: string) => void;
}

export const BugTable: React.FC<BugTableProps> = ({ bugs, onUpdateBug, onDeleteBug }) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<{
    title: string;
    priority: BugPriority;
    status: BugStatus;
    assignee: string;
  }>({
    title: '',
    priority: 'Low',
    status: 'Open',
    assignee: ''
  });

  const startEditing = (bug: Bug) => {
    setEditingId(bug.id);
    setEditForm({
      title: bug.title,
      priority: bug.priority,
      status: bug.status,
      assignee: bug.assignee
    });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditForm({
      title: '',
      priority: 'Low',
      status: 'Open',
      assignee: ''
    });
  };

  const saveEditing = () => {
    if (editingId && editForm.title.trim()) {
      onUpdateBug(editingId, {
        title: editForm.title.trim(),
        priority: editForm.priority,
        status: editForm.status,
        assignee: editForm.assignee.trim()
      });
      cancelEditing();
    }
  };

  const getPriorityClass = (priority: BugPriority) => {
    const baseClass = 'priority-badge';
    switch (priority) {
      case 'High': return `${baseClass} priority-high`;
      case 'Medium': return `${baseClass} priority-medium`;
      case 'Low': return `${baseClass} priority-low`;
    }
  };

  const getStatusClass = (status: BugStatus) => {
    const baseClass = 'status-badge';
    switch (status) {
      case 'Open': return `${baseClass} status-open`;
      case 'In Progress': return `${baseClass} status-in-progress`;
      case 'Closed': return `${baseClass} status-closed`;
    }
  };

  return (
    <table className="bug-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Assignee</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {bugs.map((bug) => (
          <tr key={bug.id}>
            {editingId === bug.id ? (
              <>
                <td>
                  <input
                    type="text"
                    value={editForm.title}
                    onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                    style={{ width: '100%', padding: '0.25rem' }}
                  />
                </td>
                <td>
                  <select
                    value={editForm.priority}
                    onChange={(e) => setEditForm({ ...editForm, priority: e.target.value as BugPriority })}
                    style={{ width: '100%', padding: '0.25rem' }}
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </td>
                <td>
                  <select
                    value={editForm.status}
                    onChange={(e) => setEditForm({ ...editForm, status: e.target.value as BugStatus })}
                    style={{ width: '100%', padding: '0.25rem' }}
                  >
                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Closed">Closed</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    value={editForm.assignee}
                    onChange={(e) => setEditForm({ ...editForm, assignee: e.target.value })}
                    style={{ width: '100%', padding: '0.25rem' }}
                  />
                </td>
                <td>
                  <div className="action-buttons">
                    <button 
                      onClick={saveEditing} 
                      className="btn btn-primary btn-small"
                    >
                      Save
                    </button>
                    <button 
                      onClick={cancelEditing} 
                      className="btn btn-secondary btn-small"
                    >
                      Cancel
                    </button>
                  </div>
                </td>
              </>
            ) : (
              <>
                <td>{bug.title}</td>
                <td>
                  <span className={getPriorityClass(bug.priority)}>
                    {bug.priority}
                  </span>
                </td>
                <td>
                  <span className={getStatusClass(bug.status)}>
                    {bug.status}
                  </span>
                </td>
                <td>{bug.assignee}</td>
                <td>
                  <div className="action-buttons">
                    <button 
                      onClick={() => startEditing(bug)} 
                      className="btn btn-secondary btn-small"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => onDeleteBug(bug.id)} 
                      className="btn btn-danger btn-small"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};