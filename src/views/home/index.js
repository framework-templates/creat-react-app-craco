import { Component } from 'react';
import '@/views/home/index.scss';
import xiamuJpg from '@/assets/images/xiamu.jpg';
class index extends Component {
  render() {
    return (
      <div className="home-container">
        <p>这个人很懒，什么都没留下</p>
        <img src={xiamuJpg} />
        <p>发呆ing</p>
      </div>
    );
  }
}

export default index;
