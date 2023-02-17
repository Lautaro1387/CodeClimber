import React, { Component } from 'react';
import About from './About';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: 'My description',
      isEditable: false,
    };
  }

  handleEditClick = () => {
    this.setState({ isEditable: true });
  };

  handleSaveClick = () => {
    // Save the updated user information to the database or server
    this.setState({ isEditable: false });
  };

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };

  render() {
    return (
      <div>
        <About
          description={this.state.description}
          isEditable={this.state.isEditable}
          onEditClick={this.handleEditClick}
        />
        {this.state.isEditable && (
          <div>
            <textarea
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            />
            <button onClick={this.handleSaveClick}>Save</button>
          </div>
        )}
      </div>
    );
  }
}

export default UserProfile;
