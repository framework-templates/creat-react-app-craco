import { Component } from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

export default class content extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Content>
        {this.props.children}
        内容代码块
      </Content>
    );
  }
}
