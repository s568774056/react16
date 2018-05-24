import React, { Component } from 'react';
import { Router, Route,  hashHistory} from 'react-router';

class App extends Component {

    render() {
        return (
            <div className="container">
                {React.cloneElement(this.props.children, this.state)}
            </div>
        );
    }
}
export default App;