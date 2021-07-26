import { Component } from 'react';
import { Layout } from 'antd';
import './index.scss';
const { Content } = Layout;

export default class content extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Content className="content-container">
        {this.props.children}
        内容代码块
      </Content>
    );
  }
}
