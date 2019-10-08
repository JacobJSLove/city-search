import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './../history';

import './App.scss';
import SearchBar from './SearchBar/SearchBar';
import CityList from './CityList/CityList';

const App = () => {
    return (
        <div className="container__wrapper">
			<SearchBar />
			<Router history={history}>
				<Switch>
					<Route path="/" exact component={CityList} />
				</Switch>
			</Router>
		</div>
    )
};

export default App;