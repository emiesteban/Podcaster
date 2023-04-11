// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/pages/home/Home';
import NotFound from '../components/pages/notfound/NotFound';

import * as Constants from '../constants';

export default function AppRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Constants.routes.podcastdetail} element={<Home />} />
        <Route path={Constants.routes.podcast} element={<Home />} />
        <Route path={Constants.routes.root} element={<Home />} />
        <Route path={Constants.routes.asterisk} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
