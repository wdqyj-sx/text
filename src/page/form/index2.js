import React from "react";
import {
  Form,
  Card,
  Button,
  Input,
  Radio,
  InputNumber,
  Select,
  Switch,
  DatePicker,
  TimePicker,
  Upload,
} from "antd";
import { LoadingOutlined ,PlusOutlined} from "@ant-design/icons";
import "./index.less";
import moment from "moment";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { Option } = Select;
const dataFormat = "YYYY/MM/DD";
const { TextArea } = Input;
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default class Resget extends React.Component {
  state = {
    loading: false,
  };
  handleChange = (info) => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) =>
        this.setState({
          imageUrl,
          loading: false,
        })
      );
    }
  };
  layoutForm = {
    labelCol: {
      sm: 4,
      xs: 24,
    },
    wrapperCol: {
      sm: 6,
      xs: 24,
    },
  };
  offsetForm = {
      wrapperCol:{
          span:6,
          offset:4
      }
  }
  onFinsh=values=>{
      console.log(values)
  }
  render() {
    const { loading, imageUrl } = this.state;
    return (
      <div className="wrap">
        <Card title="注册表单">
          <Form layout="horizontal" {...this.layoutForm} onFinish={this.onFinsh}>
            <FormItem
              label="用户名"
              name="username"
              rules={[
                {
                  required: true,
                  message: "请输入用户名",
                },
                {
                  max: 11,
                  min: 5,
                  message: "用户名必须在合理的范围内",
                },
              ]}
            >
              <Input placeholder="请输入用户名"></Input>
            </FormItem>
            <FormItem
              label="密 码 "
              name="psd"
              rules={[
                {
                  required: true,
                  message: "密码不能为空",
                },
                {
                  max: 18,
                  min: 5,
                  message: "密码必须在合理的范围内",
                },
              ]}
            >
              <Input placeholder="请输入密码"></Input>
            </FormItem>
            <FormItem label="性别" {...this.layoutForm} name="sex">
              <RadioGroup defaultValue={1}>
                <Radio value={1}>男</Radio>
                <Radio value={2}>女</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="年龄" {...this.layoutForm} name="age">
              <InputNumber defaultValue={18}></InputNumber>
            </FormItem>
            <FormItem label="当前状态" {...this.layoutForm} name="nowState">
              <Select defaultValue="咸鱼一条">
                <Option value="1">咸鱼一条</Option>
                <Option value="2">砖石王老五</Option>
                <Option value="3">王冰冰男朋友</Option>
              </Select>
            </FormItem>
            <FormItem label="爱好" {...this.layoutForm} name="hobbu">
              <Select mode="multiple">
                <Option value="1">吃饭</Option>
                <Option value="2">睡觉</Option>
                <Option value="3">打豆豆</Option>
                <Option value="4">lol</Option>
              </Select>
            </FormItem>
            <FormItem label="是否已婚" {...this.layoutForm} name="married">
              <Switch defaultChecked></Switch>
            </FormItem>
            <FormItem label="出生日期" {...this.layoutForm} name="birth">
              <DatePicker
                defaultValue={moment("2020/11/1", dataFormat)}
                format={dataFormat}
              ></DatePicker>
            </FormItem>
            <FormItem label="联系地址" {...this.layoutForm} name="address">
              <TextArea
                defaultValue="黄土高坡"
                autoSize={{ maxRows: 6, minRows: 2 }}
              ></TextArea>
            </FormItem>
            <FormItem label="起床时间" {...this.layoutForm} name="upsleep">
              <TimePicker
                defaultValue={moment("08:20:00", "HH:mm:ss")}
              ></TimePicker>
            </FormItem>
            <FormItem label="头像" {...this.layoutForm} name="avator">
              <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                onChange={this.handleChange}
              >
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="avator"
                    style={{ width: "100%" }}
                  ></img>
                ) : (
                  <div>
                    {loading ? <LoadingOutlined /> : <PlusOutlined />}
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                )}
              </Upload>
            </FormItem>
            <FormItem {...this.offsetForm}>
                <Button type="primary" htmlType="submit" >提交</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
