import { Component } from 'react';
import { Layout } from 'antd';
import './index.scss';
const { Footer } = Layout;
export default class index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Footer className="footer-container">底部代码块</Footer>;
  }
}
