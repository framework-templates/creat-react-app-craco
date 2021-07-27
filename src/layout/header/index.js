import { Component } from 'react';
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import './index.scss';
const { Header } = Layout;
class index extends Component {
  constructor(props) {
    super(props);
    console.log('this.props', this.props.history.location.pathname, this.props);
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
  componentDidMount() {
    console.log('componentDidMount', this.props.history.location.pathname, this.props);
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
        <div>魏泽</div>
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
