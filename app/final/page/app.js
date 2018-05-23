import React from 'react';
import { Router, Route,  hashHistory} from 'react-router';

class App extends React.Component{
    constructor() {
        super();
        this.state = {
        };
    }
    syncProfile() {

    }
    render() {
        return (
            <div className="container">
                {React.cloneElement(this.props.children, this.state)}
            </div>
        );
    }
}
export default App;