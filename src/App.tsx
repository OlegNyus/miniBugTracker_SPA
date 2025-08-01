import { AddBugForm } from './components/AddBugForm';
import { BugList } from './components/BugList';
import { useBugs } from './hooks/useBugs';

function App() {
  const { bugs, addBug, updateBug, deleteBug } = useBugs();

  return (
    <div className="app">
      <header className="header">
        <h1>MINI BUG TRACKER</h1>
      </header>
      
      <main className="main-content">
        <AddBugForm onAddBug={addBug} />
        <BugList 
          bugs={bugs} 
          onUpdateBug={updateBug}
          onDeleteBug={deleteBug}
        />
      </main>
    </div>
  );
}

export default App;