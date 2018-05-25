import React from 'react';
import InputA from '../components/inputA';
import Division from '../components/division';

 class PaySelect extends React.Component{

    render() {
        return (
           <div>
               <Division/>
               <InputA label="身份证号码" type="A"/>
               <Division/>
               <InputA label="住院地址" type="B"/>
               <InputA label="医院" type="D"/>
               <InputA label="住院日期" type="E"/>
               <InputA label="&nbsp;&nbsp;&nbsp;至" type="E"/>
               <Division/>
           </div>
        );
    }
}


export default PaySelect ;
