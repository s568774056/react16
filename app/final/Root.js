import React, { render } from 'react';
import { Router, IndexRoute, Link, Route, browserHistory, hashHistory} from 'react-router';
import { MUSIC_LIST } from './config/config';
import { randomRange } from './utils/util';
let PubSub = require('pubsub-js');

import Main from './page/main';

import Apply from './page/apply';

import Navigation from './components/navigation'


let App = React.createClass({
	componentDidMount() {//类似于dom ready

	},
	getInitialState() {
		return {
			musicList: MUSIC_LIST,
			currentMusitItem: {},
			repeatType: 'cycle',
			title:'首页'
		}
	},
	playMusic(item) {
		$("#player").jPlayer("setMedia", {
			mp3: item.file
		}).jPlayer('play');
		this.setState({
			currentMusitItem: item
		});
	},
    render() {
        return (
            <div className="container">
            	<Navigation title={this.state.title}></Navigation>
            	{React.cloneElement(this.props.children, this.state)}
            </div>
        );
    }
});

let Root = React.createClass({
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
});

export default Root;
