import React, { Component } from "react";
import { Col, Row } from "antd";
import Until from "../../until/untils";
//  import axios from "../../axios/axios";
import "./index.less";

export default class Header extends Component {
    state = {};
    componentWillMount() {
        setInterval(() => {
            let nowdata = Until(new Date().getTime());
            this.setState({
                nowdata
            })
        }, 1000);
    }
  
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span className="username">欢迎,管理者</span>
                        <a className="login">退出</a>
                    </Col>
                </Row>
                <Row className="header-btm">
                    <Col span={4} className="btm-title">
                        <span >首页</span>
                    </Col>
                    <Col span={20} className="btm-mes">
                        <span className="nowTime">{this.state.nowdata}</span>
                        <span className="nowWeather">晴转多云</span>
                    </Col>
                </Row>
            </div>
        )
    }
}