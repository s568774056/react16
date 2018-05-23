import React from 'react';
require('./navigation.less');

let Navigation = React.createClass({
    render() {
        return (
            <div>
                <div className="row navigation">
                    <h1 className="caption">{this.props.title}</h1>
                </div>
                <div className="row-navigation">
                </div>
            </div>
        );
    }
});

export default Navigation;
