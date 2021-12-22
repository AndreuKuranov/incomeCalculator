import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import Loaders from './components/Loaders';

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={(
        <Loaders 
          className="calc__loader"
        />
      )}
      >
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
