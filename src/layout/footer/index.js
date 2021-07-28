import { Component } from 'react';
import { Layout, Button } from 'antd';
import './index.scss';
import keepOnRecordImg from 'src/assets/images/keep-on-record.png';
const { Footer } = Layout;
export default class index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Footer className="footer-container">
        <Button type="text" target="_brank" href="http://beian.miit.gov.cn">
          粤ICP备2021062202号
        </Button>
        <Button
          type="text"
          target="_brank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030402004753"
        >
          <img src={keepOnRecordImg} />
          粤公网安备 44030402004753号
        </Button>
      </Footer>
    );
  }
}
