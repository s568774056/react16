import React, { Component } from 'react';
//分割条
class Division extends Component {

 /*   constructor(props, context) {
        super(props, context);
        props.height="8px";
    }*/

    render() {
        return (
            <div style={{height:this.props.height}}/>
        );
    }
}
Division.defaultProps={
    height:"8px"
};


export default Division ;
