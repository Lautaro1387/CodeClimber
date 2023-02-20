import React, { Component } from 'react';
import logo from '../Components/public/image/maxresdefault.jpg';

class Banner extends Component {

  handleImageChange = (event) => {
    const image = event.target.files[0];
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        document.getElementById("profilepic").src = reader.result;
      };
    }
  }

  render() {
    const { username } = this.props; // retrieve the username from props
    return (
      <section className="container-banner">
        <label htmlFor="upload-image">
          <img id="profilepic" src={logo} width="170" height="170" alt="profilepic" style={{borderRadius: '50%', cursor: 'pointer'}} />
          <input type="file" id="upload-image" style={{display: 'none'}} onChange={this.handleImageChange} />
        </label>
        <h1>{username}</h1> {/* display the username in the h1 element */}
      </section>
    );
  }
}

export default Banner;
