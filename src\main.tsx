import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import CSS Design System
import './styles/variables.css';
import './styles/base.css';
import './styles/navbar.css';
import './styles/footer.css';
import './styles/quote-form.css';
import './styles/components.css';
import './styles/pages.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
