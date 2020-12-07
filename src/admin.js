import Navlist from "./component/Navlist";
import Header from "./component/Header";
import React from "react";
// import Content from "./page/Content";
import Footer from "./component/Footer";
import { Row, Col } from "antd";
import "./App.less";

export default class Admin extends React.Component {
    render() {
        return (
            <Row>
                <Col span={4} className="navList">
                    <Navlist ></Navlist>
                </Col>
                <Col span={20} className="rightContent">
                    <Header></Header>
                    <Row className="contens">
                       <div className="cont-wrap">
                       {this.props.children}
                       </div>
                    </Row>
                    <Footer></Footer>
                </Col>
            </Row>
        );
    }
}


