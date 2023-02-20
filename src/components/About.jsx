import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: true,
      content: '',
    };
  }

  handleEditorChange = (content, editor) => {
    this.setState({ content });
  };

  handleSubmit = () => {
    this.setState({ isEditing: false });
  };

  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handleSubmit();
    }
  };

  render() {
    const { isEditing, content } = this.state;

    return (
      <section id="container-about" className="container-about">
        <div className="about-container">
          <h2>About Me</h2>
          {isEditing ? (
            <div className="editor-container" style={{ marginTop: '5px' }}>
              <Editor
                apiKey="<your_api_key>"
                initialValue="<p>Add your description here!</p>"
                init={{
                  height: 300,
                  menubar: false,
                  plugins: [
                    'advlist autolink lists link image imagetools charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount textcolor',
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help | image | textcolor',
                }}
                onEditorChange={this.handleEditorChange}
                onKeyPress={this.handleKeyPress}
              />
              <button onClick={this.handleSubmit}>Submit</button>
            </div>
          ) : (
            <>
              <div dangerouslySetInnerHTML={{ __html: content }} />
              <button onClick={this.handleEdit}>Edit</button>
            </>
          )}
        </div>
      </section>
    );
  }
}

export default About;

