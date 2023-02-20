import React, { Component } from 'react';
import mailme from '../Components/public/image/mailmeimg.png';
import medal from '../Components/public/image/medalla1.png';
import pyimg from '../Components/public/image/pythonimg.png';
import jsimg from '../Components/public/image/javascriptimg2.png';
import htmlimg from '../Components/public/image/html5logo.jpg';
import cssimg from '../Components/public/image/csslogo.png';
import ProgressBar from '../Components/Progress_bar';
class IconWithProgressBar extends Component {
  render() {
    const { icon, progress } = this.props;

    return (
      <div>
        <img src={icon} width="100" height="100" alt={icon} />
        <ProgressBar progress={progress} />
      </div>
    );
  }
}

class Contact extends Component {
  render() {
    return (
      <section id="medals" className="container-1">
        <IconWithProgressBar icon={pyimg} progress={33.33} />
        <IconWithProgressBar icon={jsimg} progress={66.67} />
        <IconWithProgressBar icon={htmlimg} progress={100} />
        <IconWithProgressBar icon={cssimg} progress={0} />
      </section>
    );
  }
}

export default Contact;
