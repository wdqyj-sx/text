import React from "react";
import {Card,Button,Popconfirm,message} from "antd";

function confirm(e) {
    console.log(e);
    message.success('ok')
    
}
function cancel(e) {
    console.log(e);
    message.error('error');
}
export default class Text extends React.Component{
   
    render(){
        return (
            <Card title="按钮组" >
                <Button type="primary" shape="circle">按钮</Button>
                <Popconfirm title="shanchu" onConfirm={confirm}
                    onCancel={cancel} okText="Yes" cancelText="No"
                >
                    <Button href="#">Text</Button>
                </Popconfirm>
            </Card>
        )
    }
}