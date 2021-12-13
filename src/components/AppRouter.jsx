import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Body from '../pages/Body';
import DownloadsList from '../pages/DownloadsList';

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
        element={<Body />}
      />
    </Routes>
  );
};

export default AppRouter;
