import React, { useCallback } from "react";
import {Card,Tabs} from "antd";
import {  PlayCircleOutlined,MenuFoldOutlined,StopOutlined,CopyOutlined} from "@ant-design/icons";
export default class Tab extends React.Component{
    chcallback = ()=>{}
    panel=[
        { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
        { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
        {
          title: 'Tab 3',
          content: 'Content of Tab 3',
          key: '3',
          closable: false,
        },
      ]
      initIndex = this.panel[0].key
      newIndex = 0
   state={
       initIndex:this.initIndex,
       panel:this.panel
   }
 onEdit=(targetKey,action)=>{
    this[action](targetKey)
 }
 add=(atrgetKey)=>{
    const title = 'newtab';
    const key = title+`${this.newIndex++}`;
    const {panel} = this.state;
    panel.push({
        title:title,
        key:key,
        content:'缓缓掉落的枫叶像思念'
    })
    this.setState({
        panel,
        initIndex:key
    })
 }
 remove=(targetKey)=>{
     const {panel,initIndex} = this.state;
    let lastindex;
    let newIndex;
    panel.forEach((pan,i)=>{
        if(pan.key === targetKey){
            lastindex = i - 1;
        }
    })
    const newPanel = panel.filter(item=>item.key!==targetKey);
    if(targetKey === initIndex) {
        if(lastindex>=0){
            newIndex=newPanel[lastindex].key;
        }
        else {
            newIndex = newPanel[0].key
        }
    }
    this.setState({
        panel:newPanel,
        initIndex:newIndex
    })
 }
    render(){
       
        return(
            <div className="wrap">
               <Card title="普通tab">
               <Tabs defaultActiveKey="1" onChange={this.chcallback}
                >
                    <Tabs.TabPane tab="tab 1" key="1">
                        我等的模样好不倔强
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="tab 2" key="2">
                        我等的模样好不倔强
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="tab 3" key="3">
                        我等的模样好不倔强
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="tab 4" key="4">
                        我等的模样好不倔强
                    </Tabs.TabPane>
                </Tabs>   
                </Card> 
                <Card title="带图标的tab">
                <Tabs defaultActiveKey="1" onChange={this.chcallback} >
                    <Tabs.TabPane tab={<span>{<PlayCircleOutlined />}tab1</span>} key="1">
                        我等的模样好不倔强
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<span>{<MenuFoldOutlined />}tab 2</span>} key="2">
                        我等的模样好不倔强
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<span>{<StopOutlined />}tab 3</span>} key="3">
                        我等的模样好不倔强
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<span>{<CopyOutlined />}tab 4</span>} key="4">
                        我等的模样好不倔强
                    </Tabs.TabPane>
                    </Tabs>
                </Card>
               <Card title="动态的tab">
                    <Tabs  type="editable-card" activeKey={this.state.initIndex} onEdit={this.onEdit}>
                        {
                            this.state.panel.map(panel=>(
                                 <Tabs.TabPane tab={panel.title} key={panel.key} closable={panel.closable}>
                                    {panel.content}
                                </Tabs.TabPane>
                            ))
                        }
                    </Tabs>
               </Card>
            </div>
        )
    }
}