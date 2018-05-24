import React from 'react';
import { Icon,Cascader,Select   } from 'antd';

class panelA extends React.Component{

    constructor() {
        super();
        this.optionA = [{
            value: '12',
            label: 'Zhejiang',
            children: [{
                value: '13',
                label: 'Hangzhou',
                children: [{
                    value: '232',
                    label: 'West Lake',
                }],
            }],
        }, {
            value: '14',
            label: 'Jiangsu',
            children: [{
                value: '21',
                label: 'Nanjing',
                children: [{
                    value: '53',
                    label: 'Zhong Hua Men',
                }],
            }],
        }];

    }

    onChange(value) {
        console.log(value);
    }

    //进行选择
     getInput(type){
        switch(type)
        {
            case 'A'://普通输入框
                return  <div className="inputDiv"><input type="text" placeholder=""/></div>;
                break;
            case 'B'://级联选择框
                return  <div className="cascadeDiv" > <Cascader options={this.optionA} onChange={this.onChange} placeholder="请选择" changeOnSelect="true" getPopupContainer={()=>document.querySelector('.top')}/></div>;
                break;
            case 'C'://普通选择框
                return <div className="selectDiv">
                    <Select defaultValue="lucy" style={{width: 120}} onChange={handleChange}>

                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>Disabled</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </div>;
                break;
            case 'D'://可对选项进行搜索的选择框
                return  <div className="input"><input type="text" placeholder=""/></div>;
                break;
            case 'E'://日期选择框
                return  <div className="input"><input type="text" placeholder=""/></div>;
                break;
            default:
                return  <div className="select"><label>请选择</label><Icon type="right" style={{color: '#08c' }} /></div>;
        }
    }

    render() {
        return (
            <div className="panelADiv">
                <div className="top"/>
                <div className="label">{this.props.label}</div>
                {this.getInput(this.props.type)}
            </div>
        );
    }
}

export default panelA ;
