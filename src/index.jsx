import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Loader from './components/Loader';

ReactDOM.render(

  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);
