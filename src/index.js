import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { ScrollToTop } from './components/others/components/ScrollToTop';
import { DataContextFilter } from './usecontext/ContextFilter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataContextFilter>
        <ScrollToTop />
        <App />
      </DataContextFilter>
    </BrowserRouter>
  </React.StrictMode>
);

