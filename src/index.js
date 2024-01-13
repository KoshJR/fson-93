import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppHTTPRequests from 'components/AppHTTPRequests';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/fson-93">
    <AppHTTPRequests />
  </BrowserRouter>
);
