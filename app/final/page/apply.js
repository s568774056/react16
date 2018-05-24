import React from 'react';
import PanelA from '../components/panelA';

 class Apply extends React.Component{

    render() {
        return (
           <div>
               <PanelA label="姓名" type=""/>
               <PanelA label="身份证号码" type="A"/>
               <PanelA label="住院地址" type="B"/>
               <PanelA label="医院" type="D"/>
                <PanelA label="住院日期" type="E"/>
           </div>
        );
    }
}

export default Apply ;
