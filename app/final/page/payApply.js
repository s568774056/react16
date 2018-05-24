import React, { Component }  from 'react';
import PanelA from '../components/panelA';
import Division from '../components/division';
import { Button} from 'antd';
import PubSub from 'pubsub-js';

class PayApply extends Component{
     constructor() {
       super();
       this.appData={
           name:'z',//姓名
           cardNo:'',//身份证号
           provOid:'',//医院OID
           inHospDate:'',//入院日期
           inHospNo:''//住院号
         }
     }
     //提交数据
     submitData(){
         PubSub.publish('VerName',this.appData.name);//发布事件
         PubSub.publish('VerCardNo',this.appData.cardNo);//发布事件
         PubSub.publish('VerProvOid',this.appData.provOid);//发布事件
         PubSub.publish('VerInHospDate',this.appData.inHospDate);//发布事件
         PubSub.publish('VerInHospNo',this.appData.inHospNo);//发布事件
         console.log(this.appData.name+"    [333333333333333333333333333333");
     }
    render() {
        return (
           <div>
               <Division/>
               <PanelA label="姓名" type="A" fnName="VerName"/>
               <PanelA label="身份证号码" type="A" fnName="VerCardNo"/>
               <Division/>
               <PanelA label="住院地址" type="B"/>
               <PanelA label="医院" type="D" fnName="VerProvOid"/>
               <PanelA label="住院日期" type="E" fnName="VerInHospDate"/>
               <Division/>
               <PanelA label="是否已住院" type="H"/>
               <PanelA label="住院号" type="A" fnName="VerInHospNo"/>
               <Division height="45px"/>
               <div className="center"><Button type="primary" onClick={this.submitData.bind(this)}  style={{width:"80%"}}>提交</Button></div>
           </div>
        );
    }
}

export default PayApply ;
