import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'antd';

class Main extends Component {
    render() {
        return (
            <div className="main-list">
                <Link to="/payApply"><Button type="primary">我的zz私人音乐坊</Button></Link>
                <Link to="/paySelect"><Button type="primary">我的zz私人音乐坊</Button></Link>
            </div>
        );
    }
}

export default Main;
