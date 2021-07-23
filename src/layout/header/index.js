import { Component } from 'react';
import { Layout } from 'antd';
const { Header } = Layout;
export default class index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Header>头部代码块</Header>;
  }
}
