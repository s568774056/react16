import React from 'react';
import { Link } from 'react-router';
require('./main.less');
import { Button } from 'react-bootstrap';

let Main = React.createClass({
    render() {
        return (
            <div className="main-list">
                <Button bsSize="large" bsStyle="primary" block><Link to="/list">直赔申请</Link></Button>
                <Button bsSize="large" bsStyle="primary" block><Link to="/list">直赔查询</Link></Button>
                <Button bsSize="large" block><Link to="/list">驻院代表登录</Link></Button>
            </div>
        );
    }
});

export default Main;
