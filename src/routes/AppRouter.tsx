import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/pages/home/Home';

import * as Constants from '../constants';

export default function AppRouter() {
	return (
		<HashRouter>
			<Routes>
				<Route path={Constants.routes.podcastdetail} loader={({ params }) => {console.log('params', params)}} element={<Home />}/>
				<Route path={Constants.routes.podcast} loader={({ params }) => {console.log('params', params)}} element={<Home />}/>
				<Route path={Constants.routes.root} element={<Home />} />
				<Route path={Constants.routes.asterisk} element={<Home />} />
			</Routes>
		</HashRouter>
	);
}
