import { Component } from 'react';
import { Layout, Button, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import githubSvg from 'src/assets/svgs/github.svg';
import './index.scss';
const { Header } = Layout;
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: this.props.history.location.pathname,
      menus: [
        {
          label: '首页',
          key: '/home'
        },
        {
          label: '日志',
          key: '/journal'
        }
      ]
    };
  }
  handleClick = ({ key }) => {
    this.setState({
      current: key
    });
    this.props.history.push(key);
  };
  render() {
    const { current, menus } = this.state;
    return (
      <Header className="header-container">
        <div className="header-container-info">
          <Button type="link" target="_blank" href="https://github.com/shiningDog">
            <img className="info-github" src={githubSvg}></img>
          </Button>
          <span className="info-name">魏泽</span>
        </div>
        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
          {menus.map((item) => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>
      </Header>
    );
  }
}
export default withRouter(index);
