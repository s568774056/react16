import React from 'react';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory ,hashHistory} from 'react-router'
import App from './page/app';
import Main from './page/main';

class AppRouter extends React.Component {
	render() {
	    return (
		    <Router history={hashHistory}>
                {console.log("AppRouterAppRouter  "+this.props.children)}
				<Route path="/" component={App}>
					<IndexRoute component={Main}/>
				</Route>
		    </Router>
		);
	}
}

export default AppRouter;
