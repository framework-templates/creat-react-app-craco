import { Component } from 'react';
import { Layout, Button, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import { getUser } from '@/api/common';
import commonStore from '@/stores/commonStore';
import githubSvg from '@/assets/svgs/github.svg';
import './index.scss';
const { Header } = Layout;
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
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
  // 组件实例化之后以及重新渲染之前调用
  componentDidMount() {
    this.getUser();
  }

  getUser() {
    getUser()
      .then((res) => {
        commonStore.dispatch({
          type: 'userInfo',
          value: res.data
        });
        const userInfo = commonStore.getState().userInfo;
        this.setState({
          userInfo
        });
      })
      .catch(() => {});
  }

  handleClick = ({ key }) => {
    this.setState({
      current: key
    });
    this.props.history.push(key);
  };
  render() {
    const { current, menus, userInfo } = this.state;
    return (
      <Header className="header-container">
        <div className="header-container-info">
          <Button type="link" target="_blank" href="https://github.com/shiningDog">
            <img className="info-github" src={githubSvg}></img>
          </Button>
          <span className="info-name">{userInfo.name}</span>
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
