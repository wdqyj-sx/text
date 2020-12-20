import React from "react";
import {Card,Button,Spin,Alert} from "antd";
import {LoadingOutlined} from "@ant-design/icons";
import "./index.less";

export default class Spins extends React.Component{
    
    render(){
    
        return(
            <div className="wrap">
                <Card title="Loading的加载">
                    <Spin size="small"></Spin>
                    <Spin style={{margin:'0 10px'}}></Spin>
                    <Spin size="large" style={{marginRight:'10px'}}></Spin>
                    <Spin indicator={<LoadingOutlined></LoadingOutlined>}></Spin>
                </Card>
                <Card title="内容遮照">
                    <Alert  type="success" message="正在加载"></Alert>
                   <Spin>
                   <Alert type="success" message="正在加载" >
                        
                        </Alert>
                   </Spin>
                </Card>
            </div>
        )
    }
}