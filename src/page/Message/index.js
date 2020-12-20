import React from "react";
import {Card,Button,message} from "antd";

export default class Notica extends React.Component{
    openNotica=(type)=>{
      message[type]({
           content:'时间的箭头，指向你铩羽而归的地方'
        })
    }
    render(){
        return(
            <div className="wrap">
                <Card title="消息框"> 
                    <Button type="primary" onClick={()=>this.openNotica('success')}>success</Button>
                    <Button type="primary" onClick={()=>this.openNotica('info')}>info</Button>
                    <Button type="primary" onClick={()=>this.openNotica('warning')}>warning</Button>
                    <Button type="primary" onClick={()=>this.openNotica('error')}>error</Button>

                </Card>
            </div>
        )
    }
}