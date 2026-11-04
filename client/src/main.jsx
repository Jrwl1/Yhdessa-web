
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <App />
    </Router>
  </React.StrictMode>
);

// Built pages arrive with their HTML already rendered: attach to it. The dev server sends an empty root.
if (container.firstElementChild) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
