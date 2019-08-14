import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Login/LoginForm';
import './adminpanel.scss';


const AdminPanel = ({
  creatTitle,
  creatGameName,
  creatText,
  creatVideo,
  creatImage,
  creatPlatform,
  creatPlatform2,
  creatPlatform3,
  creatGenre,
  creatGenre2,
  creatGenre3,
  onSubmitForm,
  InputChange,
  createResume,
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
      <div>
        <div className="creator">
          <div className="creator-article">
            <h1>ARTICLE CREATION PANEL</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="fieldgroup1">
                <div className="fieldgroup1-input"><span>Platform 1</span>
                  <Field
                    name="creatPlatform"
                    placeholder="Plateform *"
                    type="creatPlatform"
                    value={creatPlatform}
                  />
                </div>
                <div className="fieldgroup1-input"><span>Platform 2</span>
                  <Field
                    name="creatPlatform2"
                    placeholder="Plateform *"
                    type="creatPlatform"
                    value={creatPlatform2}
                  />
                </div>
                <div className="fieldgroup1-input"><span>platform 3</span>
                  <Field
                    name="creatPlatform3"
                    placeholder="Plateform *"
                    type="creatPlatform"
                    value={creatPlatform3}
                  />
                </div>
              </div>
              <div className="fieldgroup1">
                <div className="fieldgroup1-input"><span className="genretitle">Game Genre 1</span>
                  <Field
                    name="creatGenre"
                    placeholder="Genre 1 *"
                    type="text"
                    value={creatGenre}
                  />
                </div>
                <div className="fieldgroup1-input"><span className="genretitle">Game Genre 2</span>
                  <Field
                    name="creatGenre2"
                    placeholder="Genre 2*"
                    type="text"
                    value={creatGenre2}
                  />
                </div>
                <div className="fieldgroup1-input"><span className="genretitle">Game Genre 3</span>
                  <Field
                    name="creatGenre3"
                    placeholder="Genre 3*"
                    type="text"
                    value={creatGenre3}
                  />
                </div>
              </div>
              <div className="fieldgroup1">
                <div className="fieldgroup1-input"><span className="genretitle">Game Name</span>
                  <Field
                    name="creatGameName"
                    placeholder="Name *"
                    type="text"
                    value={creatGameName}
                  />
                </div>
                <div className="fieldgroup1-input"><span className="genretitle">Title</span>
                  <Field
                    name="creatTitle"
                    placeholder="Title *"
                    type="text"
                    value={creatTitle}
                  />
                </div>
                <div className="fieldgroup1-input"><span className="resume">Article Resume</span>
                  <Field
                    name="createResume"
                    placeholder="Resume *"
                    type="text"
                    value={createResume}
                  />
                </div>
              </div>
              <div className="fieldgroup2">
                <div className="fieldgroup2-input"><span className="genretitle">Video Id</span>
                  <Field
                    name="creatVideo"
                    placeholder="video Id *"
                    type="text"
                    value={creatVideo}
                  />
                </div>
                <div className="fieldgroup2-input"><span className="genretitle">Image Link</span>
                  <Field
                    name="creatImage"
                    placeholder="Image Link *"
                    type="text"
                    value={creatImage}
                  />
                </div>
              </div>
              <div className="fieldgroup3"><input type="file" accept=".jpg, .jpeg, .png, .gif" /></div>
              <div className="fieldgroup4"><p>Content</p>
                <textarea
                  onChange={changeHandler}
                  cols="100"
                  rows="10"
                  name="creatText"
                  placeholder="Content *"
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
      </div>
      )
  );
};

AdminPanel.propTypes = {
  creatGameName: PropTypes.string.isRequired,
  creatVideo: PropTypes.string.isRequired,
  creatImage: PropTypes.string.isRequired,
  creatText: PropTypes.string.isRequired,
  createResume: PropTypes.string.isRequired,
  creatTitle: PropTypes.string.isRequired,
  creatPlatform: PropTypes.string.isRequired,
  creatPlatform2: PropTypes.string.isRequired,
  creatPlatform3: PropTypes.string.isRequired,
  creatGenre: PropTypes.string.isRequired,
  creatGenre2: PropTypes.string.isRequired,
  creatGenre3: PropTypes.string.isRequired,
  InputChange: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

export default AdminPanel;
