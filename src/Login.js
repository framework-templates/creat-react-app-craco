import { Component } from 'react';
import 'src/styles/login.scss';
// import { withRouter } from 'react-router-dom';
import { Button, Pagination, Modal, Form, Input, Radio, Row, Col } from 'antd';
// import api from 'src/api/index.js';
// console.log(api);
class index extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  onFinish = (values) => {
    console.log(values);
    // api.common.login(values).then((res) => {
    //   console.log(res);
    //   // this.props.history.replace({
    //   //   path: '/home'
    //   // });
    // });
  };
  render() {
    return (
      <div className="login-form-container">
        <Form
          className="login-form"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          name="login-form"
          onFinish={this.onFinish}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default index;
