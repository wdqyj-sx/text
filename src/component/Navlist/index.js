import React, { Component } from "react";
import { Menu } from "antd";
import {NavLink} from "react-router-dom";
import "./index.less";
import menuList from "../../config/menuConfig";
const { SubMenu } = Menu;

export default class Navlist extends Component {
    componentWillMount(){
        const menuTree = this.menuLists(menuList);
        console.log(menuTree);
        this.setState({
            menuTree
        })
    }
    menuLists = (data)=>{
        return (
            data.map(item=>{
                if(item.children){
                    return (
                        <SubMenu key={item.key} title={item.title}>
                            {this.menuLists(item.children)}
                        </SubMenu>
                    )
                }else {
                    return (
                       <Menu.Item key={item.key} >
                          <NavLink to={item.key}> {item.title}</NavLink>
                       </Menu.Item>
                    )
                }
            })
        )
    }

    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""></img>
                    <h1>Imooc MS</h1>
                </div>
                <Menu theme="dark">
                  {this.state.menuTree}
                </Menu>
            </div>

        )
    }
}