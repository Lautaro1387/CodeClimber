import React, { Component } from 'react'
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
    return (
      <section className="container-banner">
        <label for="upload-image">
          <img id="profilepic" src={logo} width="170" height="170" alt="profilepic" style={{borderRadius: '50%', cursor: 'pointer'}} />
          <input type="file" id="upload-image" style={{display: 'none'}} onChange={this.handleImageChange} />
        </label>
        <h1>Username</h1>
      </section>
    )
  }
}

export default Banner

