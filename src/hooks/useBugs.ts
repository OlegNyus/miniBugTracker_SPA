import { useState, useEffect } from 'react';
import { Bug } from '../types';

const STORAGE_KEY = 'mini-bug-tracker-bugs';

export const useBugs = () => {
  const [bugs, setBugs] = useState<Bug[]>([]);

  useEffect(() => {
    const savedBugs = localStorage.getItem(STORAGE_KEY);
    if (savedBugs) {
      const parsedBugs = JSON.parse(savedBugs).map((bug: any) => ({
        ...bug,
        createdAt: new Date(bug.createdAt)
      }));
      setBugs(parsedBugs);
    } else {
      const sampleBugs: Bug[] = [
        {
          id: '1',
          title: 'UI glitch on login page',
          description: 'Login button appears misaligned on mobile devices',
          priority: 'High',
          status: 'Open',
          assignee: 'John',
          createdAt: new Date()
        },
        {
          id: '2',
          title: 'Crash on submitting',
          description: 'Application crashes when submitting form with special characters',
          priority: 'Medium',
          status: 'In Progress',
          assignee: 'Mary',
          createdAt: new Date()
        },
        {
          id: '3',
          title: 'Typo on the homepage',
          description: 'Spelling error in the main heading',
          priority: 'Low',
          status: 'Closed',
          assignee: 'Alice',
          createdAt: new Date()
        }
      ];
      setBugs(sampleBugs);
    }
  }, []);

  const saveBugs = (newBugs: Bug[]) => {
    setBugs(newBugs);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newBugs));
  };

  const addBug = (bug: Omit<Bug, 'id' | 'createdAt'>) => {
    const newBug: Bug = {
      ...bug,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    const updatedBugs = [...bugs, newBug];
    saveBugs(updatedBugs);
  };

  const updateBug = (id: string, updates: Partial<Bug>) => {
    const updatedBugs = bugs.map(bug =>
      bug.id === id ? { ...bug, ...updates } : bug
    );
    saveBugs(updatedBugs);
  };

  const deleteBug = (id: string) => {
    const updatedBugs = bugs.filter(bug => bug.id !== id);
    saveBugs(updatedBugs);
  };

  return {
    bugs,
    addBug,
    updateBug,
    deleteBug
  };
};