import { Component } from 'react';
import Header from 'src/layout/header';
import Content from 'src/layout/content';
import Footer from 'src/layout/footer';
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
