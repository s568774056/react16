import React from 'react';
import { Link } from 'react-router';
import './main.less';
import { Button } from 'antd';
class Main extends React.Component{
    render() {
        return (
            <div className="main-list">
                <Link to="/apply"><Button type="primary">我的zz私人音乐坊</Button></Link>
            </div>
        );
    }
}

export default Main;
