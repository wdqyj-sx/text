import React from "react";
import {Card,Button,Modal} from "antd";
import "./index.less"

export default class Model extends React.Component{
    state = {
        flag1:false,
        flag2:false,
        flag3:false,
        flag4:false

    }
    showModal=(type)=>{
        this.setState({
            [type]:true
        })
    }
    disableModal = (type)=>{
        this.setState({
            [type]:false
        })
    }
    showConfirm=(type)=>{
        Modal[type]({
            title:'彩虹',
            content:'你要离开，我知道很简单',
            onOk(){
                console.log('ok')
            },
            onCancel(){
                console.log('cancel')
            }
        })
    }
    render(){
      
        return(
            <div className="wrap">
                <Card title="基础模态框">
                    <Button type="primary" onClick={()=>{this.showModal('flag1')}}>Open</Button>
                    <Button type="primary" onClick={()=>{this.showModal('flag2')}}>自定义页脚</Button>
                    <Button type="primary" onClick={()=>{this.showModal('flag3')}}>顶部20px弹框</Button>
                    <Button type="primary" onClick={()=>{this.showModal('flag4')}}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框">
                    <Button type="primary" onClick={()=>{this.showConfirm('confirm')}}>Confirm</Button>
                    <Button type="primary" onClick={()=>{this.showConfirm('info')}}>Info</Button>
                    <Button type="primary" onClick={()=>{this.showConfirm('success')}}>Success</Button>
                    <Button type="primary" onClick={()=>{this.showConfirm('warning')}}>Warn</Button>
                </Card>
               <Modal title="基础模态框" visible={this.state.flag1} onOk={()=>{this.disableModal('flag1')}} onCancel={()=>{this.disableModal('flag1')}}>
                   <p>繁华声遁入空门，折煞了世人</p>
                   <p>梦偏冷辗转一生情债又几本</p>
               </Modal>
               <Modal title="基础模态框" visible={this.state.flag2} okText="好的" cancelText="算了" onOk={()=>{this.disableModal('flag2')}} onCancel={()=>{this.disableModal('flag2')}} >
                   <p>有话想对你讲</p>
                   <p>你眼睛却装忙</p>
               </Modal>
               <Modal title="基础模态框" visible={this.state.flag3} onOk={()=>{this.disableModal('flag3')}} onCancel={()=>{this.disableModal('flag3')}} className="top20">
                   <p>鸡蛋糕和你嘴角的果酱</p>
                   <p>我都想要尝</p>
               </Modal>
               <Modal title="基础模态框" visible={this.state.flag4} onOk={()=>{this.disableModal('flag4')}} onCancel={()=>{this.disableModal('flag4')}} className="verti">
                   <p>放在糖果旁的是我很想回忆的甜</p>
                   <p>然而过滤了你和我沦落而成美</p>
               </Modal>
            </div>
        )
    }
}