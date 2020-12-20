import { Component } from "react";
import { Card,Button,Form,Input } from "antd";

class FormLoad extends Component{
    render(){
        return (
            <div className="wrap">
                <Card title="内联登陆栏">
                    <Form layout="inline">
                        <Form.Item>
                            <Input/>
                        </Form.Item>
                        <Form.Item>
                            <Input/>
                        </Form.Item>
                        <Button>登陆</Button>
                    </Form>
                </Card>
                <Card title="垂直登陆栏" style={{width:300}}>
                    <Form>
                        <Form.Item name="username" rules={[
                            {
                                required:true,
                                message:'不能为空'
                                
                            },{
                                min:5,
                                max:11,
                                message:'不在范围'
                            }
                        ]} >
                            <Input/>
                        </Form.Item>
                        <Form.Item name="userpsd" rules={[
                            {
                                required:true,
                                message:'不能为空'
                            }
                        ]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default FormLoad;