import React, { Component } from 'react';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory ,hashHistory} from 'react-router'
import App from './page/app';
import Main from './page/main';
import PayApply from './page/payApply';
import PaySelect from './page/paySelect';

class AppRouter extends Component {

    constructor() {
        super();
    }
    render() {
        return (
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Main}/>
					<Route path="/payApply" component={PayApply}/>

					<Route path="/paySelect" component={PaySelect}/>
				</Route>
			</Router>
        );
    }
}

export default AppRouter;
