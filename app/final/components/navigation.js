import React from 'react';
require('./navigation.less');

 class Navigation extends React.Component{
    render() {
        return (
            <div className="navigationDiv">
                <div className="row navigation">
                    <h1 className="caption">{this.props.title}</h1>
                </div>
                <div className="row-navigation">
                </div>
            </div>
        );
    }
}

export default Navigation;
