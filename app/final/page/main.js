import React from 'react';
import { Link } from 'react-router';
import './main.less';
import { Button } from 'antd';
class Main extends React.Component{
    render() {
        return (
            <div className="main-list">
                <Button type="primary"><Link to="/apply">我的私人音乐坊</Link></Button>
            </div>
        );
    }
}

export default Main;
