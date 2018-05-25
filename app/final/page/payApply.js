import React, { Component }  from 'react';
import InputA from '../components/inputA';
import Division from '../components/division';
import { Button} from 'antd';

import { Input  } from 'antd';
const Search = Input.Search;
class PayApply extends Component{
     constructor() {
       super();
       this.appData={
           name:'z111111',//姓名
           cardNo:'',//身份证号
           provOid:'',//医院OID
           inHospDate:'',//入院日期
           inHospNo:''//住院号
         }
     }
     //提交数据
     submitData(){
//         PubSub.publish('VerName',this.appData.name);//发布事件
        if( this.appData.name==""){

            console.log(this.appData);
        }
     }

    callBack(item,val) {
        switch (item) {
            case 0://普通输入框
                this.appData.name = val;
                break;
            case 1://普通输入框
                this.appData.cardNo = val;
                break;
            case 2://普通输入框
                this.appData.provOid = val;
                break;
            case 3://普通输入框
                this.appData.inHospDate = val;
                break;
            case 4://普通输入框
                this.appData.inHospNo = 4;
                break;
        }
    }

    render() {
        return (
           <div>
               <Division/>
               <InputA label="姓名" type="A" value={this.appData.name} callBack={this.callBack.bind(this,0)}/>
               <InputA label="身份证号码" type="A" callBack={this.callBack.bind(this,1)}/>
               <Division/>
               <InputA label="住院地址" type="B"/>
               <InputA label="医院" type="D" />
               <InputA label="住院日期" type="E" />
               <Division/>
               <InputA label="是否已住院" type="H"/>
               <InputA label="住院号" type="A" />
               <Division height="45px"/>
               <div className="center"><Button type="primary" onClick={this.submitData.bind(this)}  style={{width:"80%",padding:"5px"}}>提交</Button></div>
           </div>
        );
    }
}

export default PayApply ;
