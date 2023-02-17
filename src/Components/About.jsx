import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';

class About extends Component {
  handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  };

  render() {
    return (
      <section id="container-about" className="container-about">
        <div className="about-container">
          <h2>About Me</h2>
          <div className="editor-container">
            <Editor
              apiKey="<your_api_key>"
              initialValue="<p>This is the initial content of the editor</p>"
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
            />
          </div>
        </div>
      </section>
    );
  }
}

export default About;
