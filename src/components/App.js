import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { LoadingStore } from 'context/LoadingContext';

import history from './../history';

import './App.scss';
import SearchBar from './SearchBar/SearchBar';
import CityList from './CityList/CityList';

const App = () => {
    return (
        <div className="container">
			<LoadingStore>
				<SearchBar />
				<Router history={history}>
					<Switch>
						<Route path="/" exact component={CityList} />
					</Switch>
				</Router>
			</LoadingStore>
		</div>
    )
};

export default App;