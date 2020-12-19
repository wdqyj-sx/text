import React from "react";
import "./index.less";
import { Card,Button } from "antd";
import { PlusOutlined,EditOutlined ,DeleteOutlined,SearchOutlined,DownloadOutlined,LeftOutlined,RightOutlined} from "@ant-design/icons";

export default class Buttons extends React.Component{
    state = {
        loading:true
    }
    stopLoading = ()=>{
        this.setState({
            loading:false
        })
    }
    beginLoading = ()=>{
        this.setState({
            loading:true
        })
    }
    render(){
        return(
            <div className="wrap">
                <Card title="基础按钮" className="card">
                   <Button type="primary" className="button">primary</Button>
                   <Button className="button">default</Button>
                   <Button type="dashed" className="button">dash</Button>
                   <Button type="danger" className="button"> danger</Button>
                   <Button disabled className="button">disabled</Button>
                </Card>
                <Card title="图形按钮" className="card">
                   <Button icon={<PlusOutlined />} className="button">创建</Button>
                   <Button icon={<EditOutlined />} className="button">编辑</Button>
                   <Button icon={<DeleteOutlined />} className="button">删除</Button>
                   <Button icon={<SearchOutlined />} className="button" shape="circle"></Button>
                   <Button icon={<SearchOutlined />} className="button">搜索</Button>
                   <Button icon={<DownloadOutlined />}>下载</Button>
                </Card>
                <Card title="Loading按钮" className="card">
                   <Button  type="primary" className="button" loading={this.state.loading} onClick={()=>this.beginLoading()}>确定</Button>
                   <Button type="primary" className="button" shape="circle" loading={this.state.loading} onClick={()=>this.beginLoading()}></Button>
                   <Button  type="default" className="button" loading={this.state.loading} onClick={()=>this.beginLoading()}>点击加载</Button>
                   <Button type="default" className="button" shape="circle" loading={this.state.loading} onClick={()=>this.beginLoading()}></Button>
                   <Button type="primary" onClick={()=>this.stopLoading()}>关闭</Button>
                  
                </Card>
                <Card title="按钮组" className="card">
                    <Button.Group>
                        <Button icon={<LeftOutlined />} type="primary">返回</Button>
                        <Button icon={<RightOutlined />}>前进</Button>
                    </Button.Group>
                </Card>
            </div>
        )
    }
}