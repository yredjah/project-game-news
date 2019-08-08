import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Login/LoginForm';
import { Form } from 'semantic-ui-react';
import './adminpanel.scss';

const options = [
  { key: 'computer', text: 'Computer', value: 'computer' },
  { key: 'xboxone', text: 'XboxOne', value: 'Xboxone' },
  {
    key: 'ps4', text: 'PS4', value: 'PS4',
  },
  {
    key: 'switch', text: 'Switch', value: 'switch',
  },
];

const AdminPanel = ({
  creatTitle,
  creatGameName,
  creatText,
  creatVideo,
  creatImage,
  creatPlatform,
  creatGenre,
  onSubmitForm,
  InputChange,
}) => {
  const changeHandler = (event) => {
    InputChange(event.target.name, event.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmitForm();
  };
  return (
    JSON.parse(sessionStorage.getItem('token'))
      && (
      <div className="creator">
        <h1>ARTICLE CREATOR PANEL</h1>
        <div className="creator-article">
          <form onSubmit={handleSubmit}>
            <div className="fieldgroup1">
              <div className="fieldgroup1-input"><span>Creat a New Platform</span>
                <Field
                  name="creatPlatform"
                  placeholder="Plateform *"
                  type="creatPlatform"
                  value={creatPlatform}
                />
              </div>
              <h1>or</h1>
              <div className="fieldgroup1-input"><span>Select an existing platform</span><Form.Select fluid options={options} placeholder="plateForm" /></div>
            </div>
            <div className="fieldgroup1">
              <div className="fieldgroup1-input"><span>Creat a New Genre</span>
                <Field
                  name="creatGenre"
                  placeholder="Game Genre *"
                  type="text"
                  value={creatGenre}
                />
              </div>
              <h1>or</h1>
              <div className="fieldgroup1-input"><span>Select an existing Genre</span><Form.Select fluid options={options} placeholder="Genre" /></div>
            </div>
            <div className="fieldgroup1">
              <div className="fieldgroup1-input"><span>Title</span>
                <Field
                  name="creatTitle"
                  placeholder="Article Title *"
                  type="text"
                  value={creatTitle}
                />
              </div>
              <div className="fieldgroup1-input"><span>Game Name</span>
                <Field
                  name="creatGameName"
                  placeholder="Game Name *"
                  type="text"
                  value={creatGameName}
                />
              </div>
            </div>
            <div className="fieldgroup1">
              <div className="fieldgroup1-input"><span>Video Link</span>
                <Field
                  name="creatVideo"
                  placeholder="Copy and Paste a video Link *"
                  type="text"
                  value={creatVideo}
                />
              </div>
              <div className="fieldgroup1-input"><span>Image Link</span>
                <Field
                  name="creatImage"
                  placeholder="Copy and Paste a video Link *"
                  type="text"
                  value={creatImage}
                />
              </div>
            </div>
            <div className="fieldgroup2"><span>Content</span>
              <textarea
                onChange={changeHandler}
                cols="100"
                rows="10"
                name="creatText"
                placeholder="creat Content *"
                type="text"
                value={creatText}
              />
            </div>
            <button
              className="btn-submit btn-submit--article"
              type="submit"
            >
              SUBMIT ARTICLE
            </button>

          </form>
        </div>
      </div>
      )
  );
};

AdminPanel.propTypes = {
  creatGameName: PropTypes.string.isRequired,
  creatVideo: PropTypes.string.isRequired,
  creatImage: PropTypes.string.isRequired,
  creatText: PropTypes.string.isRequired,
  creatTitle: PropTypes.string.isRequired,
  creatPlatform: PropTypes.string.isRequired,
  creatGenre: PropTypes.string.isRequired,
  InputChange: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

export default AdminPanel;
