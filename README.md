# Mini Bug Tracker SPA

A modern, minimalistic single-page application for tracking bugs with a beautiful pastel color scheme.

## Features

- **Add Bugs**: Create new bug reports with title, description, priority, and assignee
- **Bug List**: View all bugs in a responsive table format
- **Search & Filter**: Find bugs by text search or filter by status
- **Edit & Delete**: Inline editing of bug details and deletion functionality
- **Data Persistence**: Bug data is saved in localStorage
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, minimalistic design with pastel colors

## Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **CSS3** - Custom CSS with CSS Grid and Flexbox
- **ESLint** - Code quality and consistency

## Getting Started

### Prerequisites

- Node.js (version 20.19.0 or higher, 22.12.0+ recommended)
- npm or yarn

### Installation

1. Clone the repository or download the project files
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── AddBugForm.tsx    # Form for creating new bugs
│   ├── BugList.tsx       # Bug list with search and filters
│   └── BugTable.tsx      # Table component with edit/delete
├── hooks/
│   └── useBugs.ts        # Custom hook for bug management
├── types/
│   └── index.ts          # TypeScript type definitions
├── App.tsx               # Main application component
├── main.tsx              # Application entry point
└── index.css             # Global styles and CSS variables
```

## Bug Status Types

- **Open**: Newly reported bugs
- **In Progress**: Bugs currently being worked on
- **Closed**: Resolved bugs

## Priority Levels

- **Low**: Minor issues (green badge)
- **Medium**: Moderate issues (orange badge)
- **High**: Critical issues (red badge)

## Color Scheme

The application uses a carefully selected pastel color palette:
- Light grays and whites for backgrounds
- Soft pastels for priority badges (mint green, peach, coral)
- Subtle shadows and rounded corners for modern appeal

## Responsive Design

The application is fully responsive with:
- Grid layout that stacks on mobile devices
- Responsive table that adjusts font sizes on smaller screens
- Touch-friendly buttons and form elements
- Flexible search and filter controls

## Data Persistence

Bug data is automatically saved to the browser's localStorage, ensuring your bugs persist between sessions. The application includes sample bugs on first load to demonstrate functionality.
