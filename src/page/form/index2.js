import React from "react";
import { Form,Card,Button,Input,Radio ,InputNumber,Select} from "antd";
import "./index.less";
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const {Option} = Select;

export default class Resget extends React.Component{
     layoutForm = {
        labelCol:{
            sm:4,
            xs:24
        },
        wrapperCol:{
            sm:6,
            xs:24
        }
    }
    render(){
        return (
            <div className="wrap" >
                <Card title="注册表单" >
                    <Form layout="horizontal" {...this.layoutForm} >
                        <FormItem label="用户名" name="username" rules={[
                            {
                                required:true,
                                message:'请输入用户名'
                            },{
                                max:11,
                                min:5,
                                message:'用户名必须在合理的范围内'
                            }
                        ]}>
                            <Input placeholder="请输入用户名"></Input>
                        </FormItem>
                        <FormItem label="密 码 " name="psd" rules={[
                            {
                                required:true,
                                message:'密码不能为空'
                            },{
                                max:18,
                                min:5,
                                message:'密码必须在合理的范围内'
                            }
                        ]}>
                            <Input placeholder='请输入密码'>
                            
                            </Input>
                        </FormItem>
                        <FormItem label="性别" {...this.layoutForm}>
                            <RadioGroup defaultValue={1}>
                                <Radio value={1}>男</Radio>
                                <Radio value={2}>女</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem label="年龄" {...this.layoutForm}>
                            <InputNumber defaultValue={18} ></InputNumber>
                        </FormItem>
                        <FormItem label="当前状态" {...this.layoutForm}>
                            <Select defaultValue="咸鱼一条">
                                <Option value="1">咸鱼一条</Option>
                                <Option value="2">砖石王老五</Option>
                                <Option value="3">王冰冰男朋友</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="爱好" {...this.layoutForm}>
                            <Select mode="multiple">
                                <Option value="1">吃饭</Option>
                                <Option value="2">睡觉</Option>
                                <Option value="3">打豆豆</Option>
                                <Option value="4">lol</Option>

                            </Select>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}