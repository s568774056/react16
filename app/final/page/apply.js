import React from 'react';
import PanelA from '../components/panelA';
import Division from '../components/division';

 class Apply extends React.Component{

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
           </div>
        );
    }
}

export default Apply ;
