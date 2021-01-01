import {Card,Table} from "antd";
import React from "react";
import "./index.less";

export default class BaseTable extends React.Component{
   
    render(){
        const columns = [{
            title:"姓名",
            dataIndex:'name',
            key:'name'
        },{
            title:'年龄',
            dataIndex:'age',
            key:'age'
        },{
            title:'住址',
            dataIndex:'address',
            key:'address'
        }];
        const dataSource = [
            {
              key: '1',
              name: '胡彦斌',
              age: 32,
              address: '西湖区湖底公园1号',
            },
            {
              key: '2',
              name: '胡彦祖',
              age: 42,
              address: '西湖区湖底公园1号',
            },
            {
                key: '3',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
              },
              {
                key: '4',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
              },
              {
                key: '5',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
              },
              {
                key: '6',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
              },
          ];
        return(
            <div className="wrap">
                <Card title="基础表格">
                    <Table dataSource={dataSource}  columns={columns}></Table>
                </Card>
            </div>
        )
    }
}