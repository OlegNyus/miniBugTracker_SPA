import React, { useState, useMemo } from 'react';
import { Bug, BugStatus } from '../types';
import { BugTable } from './BugTable';

interface BugListProps {
  bugs: Bug[];
  onUpdateBug: (id: string, updates: Partial<Bug>) => void;
  onDeleteBug: (id: string) => void;
}

export const BugList: React.FC<BugListProps> = ({ bugs, onUpdateBug, onDeleteBug }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<BugStatus | 'All'>('All');

  const filteredBugs = useMemo(() => {
    return bugs.filter(bug => {
      const matchesSearch = bug.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           bug.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           bug.assignee.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'All' || bug.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  }, [bugs, searchTerm, statusFilter]);

  return (
    <div className="list-container">
      <h2>Bug List</h2>
      
      <div className="search-filters">
        <div className="form-group search-input">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="form-group filter-select">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as BugStatus | 'All')}
          >
            <option value="All">Status</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
      </div>

      {filteredBugs.length === 0 ? (
        <div className="empty-state">
          <p>No bugs found</p>
          <small>Try adjusting your search or filters</small>
        </div>
      ) : (
        <BugTable 
          bugs={filteredBugs} 
          onUpdateBug={onUpdateBug}
          onDeleteBug={onDeleteBug}
        />
      )}
    </div>
  );
};