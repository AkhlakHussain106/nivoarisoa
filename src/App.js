import React from 'react';
import { Sidebar } from './container/sidebar';
import './App.css'
import { Dashboard } from './components/dashboard';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
