import React from 'react';
import PanelA from '../components/panelA';
import Division from '../components/division';
import { Button} from 'antd';
import PubSub from 'pubsub-js';
 class PayApply extends React.Component{

     test(){ console.log("..2222222222...........");
         PubSub.publish('PLAAA');
        /*
         PubSub.subscribe("PLAAA",function() { alert("zz"); });
         Pubsub.unsubscriber("PLAAA");
         */
     }


    render() {
        return (
           <div>
               <Division/>
               <PanelA label="姓名" type="A"/>
               <PanelA label="身份证号码" type="A"/>
               <Division/>
               <PanelA label="住院地址" type="B"/>
               <PanelA label="医院" type="D"/>
               <PanelA label="住院日期" type="E"/>
               <Division/>
               <PanelA label="是否已住院" type="H"/>
               <PanelA label="住院号" type="A"/>
               <Division height="45px"/>
               <div className="center"><Button type="primary" onClick={this.test}  style={{width:"80%"}}>提交</Button></div>
           </div>
        );
    }
}

export default PayApply ;
