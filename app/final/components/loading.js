import React from 'react';
import { Spin } from 'antd';
require('./loading.css');
let Loading = React.createClass({
    render() {
        return (
            <div className="example">
                <Spin />
            </div>
        );
    }
});

export default Loading;
