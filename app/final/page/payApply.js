import React, { Component }  from 'react';
import InputA from '../components/inputA';
import Division from '../components/division';
import { message,Button } from 'antd';
class PayApply extends Component{
     constructor() {
       super();
       this.state={
           isInHosp:false//是否已入院
       }
       this.appData={
           name:'',//姓名
           cardNo:'',//身份证号
           provOid:'',//医院OID
           inHospDate:'',//入院日期
           inHospNo:''//住院号
         }
     }
     //提交数据
     submitData(){
//         PubSub.publish('VerName',this.appData.name);//发布事件
        if(!this.appData.name){
            message.error('请输入姓名', 1);
            return
        }
        if(!this.appData.cardNo){
            message.error('请输入身份证号', 1);
            return
        }
         if(!this.appData.cardNo){
             message.error('请输入姓名', 1);
             return
         }
         if(!this.appData.provOid){
            // message.error('请选择医院', 1);
             //return
         }
         if(!this.appData.inHospDate){
             message.error('请输入入院日期', 1);
             return
         }
         if(this.state.isInHosp&&!this.appData.inHospNo){
             message.error('请输入住院号', 1);
             return
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
            case 2:
                this.appData.provOid = val;
                break;
            case 3:
                this.appData.inHospDate = val;
                break;
            case 4:
                this.appData.inHospDate =val;
                break;
            case 5:
                this.setState({
                    isInHosp: val
                });
            break;
            case 6:
                this.appData.inHospNo = val;
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
               <InputA label="住院地址" type="B" callBack={this.callBack.bind(this,2)}/>
               <InputA label="医院" type="D" callBack={this.callBack.bind(this,3)}/>
               <InputA label="住院日期" type="E" callBack={this.callBack.bind(this,4)}/>
               <Division/>
               <InputA label="是否已住院" type="H" callBack={this.callBack.bind(this,5)}/>
               {this.state.isInHosp?
                    <InputA label="住院号" type="A" callBack={this.callBack.bind(this,6)}/>:null
               }
               <Division height="45px"/>
               <div className="center"><Button type="primary" onClick={this.submitData.bind(this)}  style={{width:"80%",padding:"5px",fontSize:"15px"}}>提交</Button></div>
           </div>
        );
    }
}

export default PayApply ;
