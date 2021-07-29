import { Component } from 'react';
import './index.scss';
import Header from '@/layout/header';
import Content from '@/layout/content';
import Footer from '@/layout/footer';

export default class index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="layout-container">
        <Header />
        <Content>{this.props.children}</Content>
        <Footer />
      </div>
    );
  }
}
