import React, { Component } from 'react';
import axios from 'axios';

import './useravatar.scss';

class UserAvatar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    // console.log('files', ev.target.files[0]);

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    //data.append('filename', this.fileName.value);

    // console.log({ data });

    axios.post('http://localhost:3000/api/upload', data)
      .then((response) => {
        this.setState({ imageURL: `http://localhost:8080/${response.data.file}` });
      });
  }

  render() {
    return (
      <form className="avatar" onSubmit={this.handleUploadImage} encType="multipart/form-data">
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" accept=".jpg, .jpeg, .png, .gif" />
        </div>
       
        <br />
        <div>
          <button>Upload</button>
        </div>
        <img src={this.state.imageURL} alt="img" />
      </form>
    );
  }
}

export default UserAvatar; 
