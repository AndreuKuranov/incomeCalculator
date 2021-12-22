import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Body from '../pages/Body';
import DownloadsList from '../pages/DownloadsList';
import ErrorPage from '../pages/ErrorPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/incomeCalculator"
        element={(
          <DownloadsList
            className="main__downloads"
          />
            )}
      />
      <Route path="/incomeCalculator/:invoiceId" element={<Body />} />
      <Route
        path="*"
        element={<ErrorPage />}
      />
    </Routes>
  );
};

export default AppRouter;
