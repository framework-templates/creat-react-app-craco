import { Component } from 'react';
import './index.scss';
import Header from 'src/layout/header';
import Content from 'src/layout/content';
import Footer from 'src/layout/footer';
import Routes from 'src/routes';

export default class index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { props } = this;
    return (
      <div className="layout-container">
        <Header {...props} />
        <Content>
          <Routes></Routes>
        </Content>
        <Footer />
      </div>
    );
  }
}
