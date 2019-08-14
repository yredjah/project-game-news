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

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    
    axios.request({
      url: 'http://localhost:3000/api/upload',
      method: 'post',
      data,
      headers: {
        authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
      },
    })
      .then((response) => {
        window.location.href = '/user';
        this.setState({ imageURL: `http://localhost:8080/${response.data.file}` });
      });
  }

  render() {
    return (
      <>
        <form className="avatar" onSubmit={this.handleUploadImage} encType="multipart/form-data">
          <div className="downloadAvatar">
            <input ref={(ref) => { this.uploadInput = ref; }} type="file" accept=".jpg, .jpeg, .png, .gif" />
          </div>
          <br />
          <div>
            <button>Upload</button>
          </div>
          <img className="avatar-img" src={this.state.imageURL} alt="img" />
        </form>
      </>
    );
  }
}

export default UserAvatar; 
