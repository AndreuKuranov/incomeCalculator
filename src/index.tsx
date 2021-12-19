import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Loader from 'react-loader-spinner';
import { store } from './store';
import App from './App';

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={(
        <div className="calc__loader">
          <Loader 
            type="Puff"
            color="#ff4400"
            height={100}
            width={100}
          />
        </div>
      )}
      >
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
