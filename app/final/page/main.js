import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'antd';

class Main extends Component {
    render() {
        return (
            <div className="mainDiv">
                <Link to="/payApply"><div className="center"><Button type="primary">直赔申请</Button></div></Link>
                <Link to="/paySelect"><div className="center"><Button type="primary">直赔查询</Button></div></Link>
            </div>
        );
    }
}

export default Main;
