import React from "react";
import "./index.less";
import { Card,Button } from "antd";
import { PlusOutlined,EditOutlined ,DeleteOutlined,SearchOutlined,DownloadOutlined,LoadingOutlined} from "@ant-design/icons";

export default class Buttons extends React.Component{
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
                   <Button icon={<SearchOutlined />} className="button"> </Button>
                   <Button icon={<SearchOutlined />} className="button">搜索</Button>
                   <Button icon={<DownloadOutlined />}>下载</Button>
                </Card>
                <Card title="Loading按钮" className="card">
                   <Button icon={  <LoadingOutlined />} type="primary" className="button">确定</Button>
                   <Button icon={  <LoadingOutlined />} type="primary" className="button"></Button>
                   <Button icon={  <LoadingOutlined />} type="default" className="button">点击加载</Button>
                   <Button icon={  <LoadingOutlined />} className="button"> </Button>
                   <Button icon={<SearchOutlined />} className="button">搜索</Button>
                   <Button icon={<DownloadOutlined />}>下载</Button>
                </Card>
            </div>
        )
    }
}