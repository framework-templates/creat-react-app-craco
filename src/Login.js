import { Component } from 'react';
import '@/styles/login.scss';
import { withRouter } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { login } from '@/api/common';
import commonStore from '@/stores/commonStore';
import { setToken } from '@/utils/auth';
class index extends Component {
  constructor(props) {
    super(props);
  }
  onFinish = (values) => {
    login(values)
      .then((res) => {
        const token = res.data;
        commonStore.dispatch({
          type: 'token',
          value: token
        });
        setToken(token);
        this.props.history.replace('/home');
      })
      .catch(() => {});
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

export default withRouter(index);
