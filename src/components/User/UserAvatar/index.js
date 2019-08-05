import React, { Component } from 'react';
import ReactDOM from "react-dom";
import ImageUploader from 'react-images-upload';

// == Import : local
import './useravatar.scss';

// == Composant
class UserAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
      pictures: this.state.pictures.concat(pictureFiles),
    });
  }

  render() {
    return (
      <div className="userAvatar">
        <h1>Your avatar</h1>
        <div className="avatar_container">
          <ImageUploader
            className="uploader"
            withIcon={false}
            withPreview={true}
            label=""
            buttonText="Upload Images"
            onChange={this.onDrop}
            imgExtension={[".jpg", ".jpeg", ".gif", ".png", ".gif", ".svg"]}
            maxFileSize={1048576}
            fileSizeError=" file size is too big"
          />
        </div>
      </div>
    );
  }
}


// == Export
export default UserAvatar;
