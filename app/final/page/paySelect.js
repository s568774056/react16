import React from 'react';
import PanelA from '../components/panelA';
import Division from '../components/division';

 class PaySelect extends React.Component{

    render() {
        return (
           <div>
               <Division/>
               <PanelA label="身份证号码" type="A"/>
               <Division/>
               <PanelA label="住院地址" type="B"/>
               <PanelA label="医院" type="D"/>
               <PanelA label="住院日期" type="E"/>
               <PanelA label="&nbsp;&nbsp;&nbsp;至" type="E"/>
               <Division/>
           </div>
        );
    }
}


export default PaySelect ;
