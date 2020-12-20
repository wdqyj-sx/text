import React from "react";
import {Card,Button,notification} from "antd";

export default class Notica extends React.Component{
    openNotica=(type)=>{
        notification[type]({
            message:'天灰灰，会不会',
            description:'让我忘了你是谁'
        })
    }
    render(){
        return(
            <div className="wrap">
                <Card title="消息通知框"> 
                    <Button type="primary" onClick={()=>this.openNotica('success')}>success</Button>
                    <Button type="primary" onClick={()=>this.openNotica('info')}>info</Button>
                    <Button type="primary" onClick={()=>this.openNotica('warning')}>warning</Button>
                    <Button type="primary" onClick={()=>this.openNotica('error')}>error</Button>

                </Card>
            </div>
        )
    }
}