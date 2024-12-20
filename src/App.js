import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

function App() {

  const [updateStatus, setUpdateStatus] = useState("Up-to-date");
  const [lastUpdated, setLastUpdated] = useState("Dec 21, 2024 14:30"); /*Here we'll add a function to check the last updated time of DB*/
  const [issues, setIssues] = useState([]); /*issues will report if there are any food items that haven't been updated in a certain time frame etc*/

  return (
    <div className="App">
      <Sidebar />
      <main className="App-main">
        <header className="App-header">
          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search for food items..."
            />
            <button className="search-button">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </header>
        <div className="content">
          <UpdatesBox
            status={updateStatus}
            lastUpdated={lastUpdated}
            issues={issues}
          />
        </div>
      </main>
    </div>
  );
}

export default App;

const Sidebar = () => (
  <div className="sidebar">
    <h2>Food Price Tracker</h2>
    <div className="sidebar-menu">
      <button className="sidebar-button">🏠 Home</button>
      <button className="sidebar-button">🍎 Add New Food</button>
      <button className="sidebar-button">⚙️ Settings</button>
      <button className="sidebar-button">❓ Help</button>
    </div>
  </div>
);

function UpdatesBox({ status, lastUpdated, issues }) {
  return (
    <div className="updates-box">
      <h3>Updates</h3>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Last Updated:</strong> {lastUpdated}</p>
      {issues.length > 0 ? (
        <div>
          <strong>Issues:</strong>
          <ul>
            {issues.map((issue, index) => (
              <li key={index}>{issue}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p><strong>Issues:</strong> None</p>
      )}
    </div>
  );
}