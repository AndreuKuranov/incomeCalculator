import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Loader from './components/Loader';

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root'),
);
