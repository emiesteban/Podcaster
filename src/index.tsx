import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

// Create a root.
if (container !== null) {
  const root = ReactDOMClient.createRoot(container);
  // Initial render: Render an element to the root
  root.render(<App />);
} else {
  throw new Error('Could not find container element');
}
