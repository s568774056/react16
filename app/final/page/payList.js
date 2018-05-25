import React from 'react';
import { Card, Button } from 'antd';
import Division from '../components/division';

 class PayList extends React.Component{

     getItem(){
         return (
             <div>
                 <div className="panelA">
                     <div>
                         <label>姓名：</label>
                         <label>圣斗士</label>
                     </div>
                     <div>
                         <label>证件号码：</label>
                         <label>411122199410162846</label>
                     </div>
                     <div>
                         <label>保单：</label>
                         <label>411122199410162846</label>
                     </div>
                     <div>
                         <label>申请日期：</label>
                         <label>2018/05/16</label>
                         &nbsp;&nbsp;&nbsp;&nbsp;
                         <label>入院日期：</label>
                         <label>2018/05/16</label>
                     </div>
                     <div>
                         <label>医院：</label>
                         <label>411122199410162846</label>
                     </div>
                     <div>
                         <label>状态：</label>
                         <label>审核通过</label>
                     </div>
                 </div><Division/>
             </div>
         );
     }
    render() {
        return (
           <div className="payList">
               {this.getItem()}
               {this.getItem()}
               {this.getItem()}
               {this.getItem()}
               {this.getItem()}
               {this.getItem()}
               {this.getItem()}
               {this.getItem()}
               {this.getItem()}
               {this.getItem()}
               {this.getItem()}
               {this.getItem()}

           </div>
        );
    }
}


export default PayList ;
