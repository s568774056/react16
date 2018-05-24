import React from 'react';
import { Icon,Cascader,Select,DatePicker,Radio,Switch} from 'antd';
const Option = Select.Option;
const RadioGroup = Radio.Group;
const { MonthPicker, RangePicker } = DatePicker;

class PanelA extends React.Component{

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




     range(start, end) {
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    }

     disabledDate(current) {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
    }

     disabledDateTime() {
        return {
            disabledHours: () => range(0, 24).splice(4, 20),
            disabledMinutes: () => range(30, 60),
            disabledSeconds: () => [55, 56],
        };
    }

     disabledRangeTime(_, type) {
        if (type === 'start') {
            return {
                disabledHours: () => range(0, 60).splice(4, 20),
                disabledMinutes: () => range(30, 60),
                disabledSeconds: () => [55, 56],
            };
        }
        return {
            disabledHours: () => range(0, 60).splice(20, 4),
            disabledMinutes: () => range(0, 31),
            disabledSeconds: () => [55, 56],
        };
    }




    //进行选择
     getInput(type){
        switch(type)
        {
            case 'A'://普通输入框
                return  <div className="inputDiv"><input type="text" placeholder=""/></div>;
                break;
            case 'B'://级联选择框
                return  <div className="cascadeDiv" > <Cascader options={this.optionA} placeholder="请选择" changeOnSelect="true" getPopupContainer={()=>document.querySelector('.cascadeDiv')}/></div>;
                break;
            case 'C'://普通选择框
                return <div className="selectDiv">
                    <Select defaultValue="lucy" style={{width: 120}}>
                        <Option value="lucy">Lucy</Option>
                    </Select>
                </div>;
                break;
            case 'D'://可对选项进行搜索的选择框
                return  <div className="searchSltDiv">
                                <Select defaultValue="lucy" showSearch
                                        style={{width: 200}}
                                        placeholder="Select a person"
                                        optionFilterProp="children"
                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                                    <Option value="lucy">中国</Option>
                                    <Option value="cc">德国</Option>
                                </Select>
                         </div>;
                break;
            case 'E'://日期选择框
                return  <div className="datePickerDiv"><DatePicker /></div>;
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
                return  <div className="switchDiv"><Switch checkedChildren="是" unCheckedChildren="否"/></div>;
                break;
            default:
                return  <div className="select"><Icon type="api" style={{color: '#08c' }} /></div>;
        }
    }

    render() {
        return (
            <div className="panelADiv">
                <div className="label">{this.props.label}</div>
                {this.getInput(this.props.type)}
            </div>
        );
    }
}

PanelA.defaultProps={
    label:""
};
export default PanelA ;
