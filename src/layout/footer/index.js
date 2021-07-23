import { Component } from 'react';
import { Layout } from 'antd';
console.log('Layout', Layout);
const { Footer } = Layout;
export default class index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Footer>底部代码块</Footer>;
  }
}
