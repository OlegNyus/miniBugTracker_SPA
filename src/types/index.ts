export interface Bug {
  id: string;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Open' | 'In Progress' | 'Closed';
  assignee: string;
  createdAt: Date;
}

export type BugStatus = 'Open' | 'In Progress' | 'Closed';
export type BugPriority = 'Low' | 'Medium' | 'High';