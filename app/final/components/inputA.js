import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import { Icon,Cascader,Select,DatePicker,Radio,Switch,Input } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const Option = Select.Option;
const RadioGroup = Radio.Group;
const { MonthPicker, RangePicker } = DatePicker;

const localeLg =
    {
        "lang": {
            "today": "今天",
            "now": "今天",
            "month": "Month",
            "year": "Year",
            "monthSelect": "选择月份",
            "yearSelect": "选择年份",
            "yearFormat": "YYYY",
            "dateFormat": "M/D/YYYY",
            "dayFormat": "D",
            "monthBeforeYear": true,
            "previousMonth": "上个月",
            "nextMonth": "下个月",
            "previousYear": "上一年",
            "nextYear": "下一年",
            "May":"五月"
        },
        "timePickerLocale": {
            "placeholder": "Select time"
        }
    };


class InputA extends Component{

    constructor(props) {
        super(props);
        this.optionA = [{
            value: '12',
            label: '河南',
            children: [{
                value: '13',
                label: '漯河',
                children: [{
                    value: '232',
                    label: '临颍',
                }],
            }],
        }, {
            value: '14',
            label: '浙江',
            children: [{
                value: '21',
                label: '坤州',
                children: [{
                    value: '53',
                    label: '皮革厂',
                }],
            }],
        }];
    }



    /*PubSub.subscribe("PLAAA",this.testzz);//处理事件
    Pubsub.unsubscriber("PLAAA");//解绑*/

    inputChange(event) {//普通输入框
        this.props.callBack(event.target.value.trim());
    }

    switchChange(val) {//开关按钮
        this.props.callBack(val);
    }

    datePickerChange(val,date) {//日期选择框
        this.props.callBack(date.trim());
    }

    //进行选择
     getInput(type){
        switch(type)
        {
            case 'A'://普通输入框
                return  <div className="inputDiv"><Input  type="text" placeholder="" onChange={this.inputChange.bind(this)}/></div>;
                break;
            case 'B'://级联选择框
                return  <div className="cascadeDiv" > <Cascader options={this.optionA} placeholder="请选择" changeOnSelect="true" getPopupContainer={()=>document.querySelector('.cascadeDiv')}/></div>;
                break;
            case 'C'://普通选择框
                return <div className="selectDiv">
                    <Select  style={{width: 120}} notFoundContent="暂无数据" >
                        <Option value="lucy">Lucy</Option>
                    </Select>
                </div>;
                break;
            case 'D'://可对选项进行搜索的选择框
                return  <div className="searchSltDiv">
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="请选择"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                <Option value="jack">中山医院</Option>
                                <Option value="lucy">热岛山医院</Option>
                                <Option value="tom">空岛山医院</Option>
                            </Select>
                         </div>;
                break;
            case 'E'://日期选择框
                return  <div className="datePickerDiv"><DatePicker locale={localeLg} format="YYYY-MM-DD"  onChange={this.datePickerChange.bind(this)}/></div>;
                break;
            case 'F'://单选
                return <div className="radioDiv">
                            <RadioGroup value={1}>
                                <Radio value={1}>否</Radio>
                                <Radio value={2}>是</Radio>
                            </RadioGroup>
                        </div>;
                break;
            case 'G'://多选
                return  <div className="datePickerDiv"><DatePicker /></div>;
                break;
            case 'H'://开关按钮
                return  <div className="switchDiv"><Switch checkedChildren="是" unCheckedChildren="否" onChange={this.switchChange.bind(this)}/></div>;
                break;
            default:
                return  <div className="select"><Icon type="api" style={{color: '#08c' }} /></div>;
        }
    }

    render() {
        return (
            <div className="inputADiv">
                <div className="label">{this.props.label}</div>
                {this.getInput(this.props.type)}
            </div>
        );
    }
}

export default InputA ;
