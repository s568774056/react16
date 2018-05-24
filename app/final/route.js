import React, { Component } from 'react';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory ,hashHistory} from 'react-router'
import App from './page/app';
import Main from './page/main';
class AppRouter extends Component {
	render() {
	    return (
		    <Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Main}/>
				</Route>
		    </Router>
		);
	}
}

export default AppRouter;
