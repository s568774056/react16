import React from 'react';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory ,hashHistory} from 'react-router'
import App from './page/app';
import Main from './page/main';
import Apply from './page/apply';

class AppRouter extends React.Component {
	render() {
	    return (
		    <Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Main}/>
					<Route path="/apply" component={Apply} />
				</Route>
		    </Router>
		);
	}
}

export default AppRouter;
