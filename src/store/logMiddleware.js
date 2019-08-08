import axios from 'axios';
import {
  ON_SUBMIT_LOGIN,
  setUsersLogin,
  ON_SUBMIT_REGISTER,
  cleanRegisterFileds,
  GET_ARTICLES,
  setArticles,
  GET_USER_INFO,
  setUserInfo,
  ON_SUBMIT_CONTACT,
  GET_PLATEFORM,
  setPlateform,
  GET_GENRE,
  setGenre,
  GET_ONE_ARTICLE,
  setOneArticle,
} from 'src/store/reducer';

const logMiddleware = store => next => (action) => {
  console.log('Je suis le middleware, et je laisse passer cette action: ', action);
  next(action);

  // POUR EXEMPLE: Requetes avec Axios
  // Je dois réagir uniquement à certains types d'action
  switch (action.type) {
    case ON_SUBMIT_LOGIN:
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.post('http://localhost:3000/api/users/login', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        mail: store.getState().loginEmail,
        password: store.getState().loginPassword,
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(setUsersLogin(response.data.token));
          sessionStorage.setItem('token', JSON.stringify(store.getState().token));
          window.location.href = '/user';
        })
        // en cas d'echec : catch
        .catch((error) => {
          console.error(error.message, 'Username or Password does not exists');
          console.error(error.response);
        });
      break;
    case ON_SUBMIT_REGISTER:
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.post('http://localhost:3000/api/users/register', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        username: store.getState().registerUserName,
        firstname: store.getState().registerFirstName,
        lastname: store.getState().registerLastName,
        mail: store.getState().registerEmail,
        password: store.getState().registerPassword,
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(cleanRegisterFileds());
          window.location.href = '/login';
        })
        // en cas d'echec : catch
        .catch((error) => {
          console.error(error.message);
          console.error(error.response);
        });
      break;
    case GET_ARTICLES:
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.get('http://localhost:3000/api/articles/listArticle/', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(setArticles(response.data));
        })
        // en cas d'echec : catch
        .catch((error) => {
          console.error(error.message);
          console.error(error.response);
        });
      break;
    case GET_USER_INFO:
    // console.log(JSON.parse(sessionStorage.getItem('token')));
      axios.get('http://localhost:3000/api/users/me', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
        },
      })
        .then((response) => {
          console.log(
            response.data.firstname,
            response.data.lastname,
            response.data.username,
            response.data.mail,
          );
          store.dispatch(setUserInfo(
            response.data.username,
            response.data.firstname,
            response.data.lastname,
            response.data.mail,
            response.data.Role.name,
          ));
        })
        // en cas d'echec : catch
        .catch((error) => {
          console.error(error.message);
          console.error(error.response);
        });
      break;
    case ON_SUBMIT_CONTACT:
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.post('http://localhost:3000/api/mailer/', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        contactFirstName: store.getState().contactFirstName,
        contactLastName: store.getState().contactLastName,
        contactEmail: store.getState().contactEmail,
        contactMessage: store.getState().contactMessage,
      })
        .then((response) => {
          console.log(response.data);
        })
        // en cas d'echec : catch
        .catch((error) => {
          console.error(error.message);
          console.error(error.response);
        });
      break;
    case GET_PLATEFORM:
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.get('http://localhost:3000/api/plateform/getAll/', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(setPlateform(response.data));
        })
        // en cas d'echec : catch
        .catch((error) => {
          console.error(error.message);
          console.error(error.response);
        });
      break;
    case GET_GENRE:
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.get('http://localhost:3000/api/genre/getAll/', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(setGenre(response.data));
        })
        // en cas d'echec : catch
        .catch((error) => {
          console.error(error.message);
          console.error(error.response);
        });
      break;
    case GET_ONE_ARTICLE:
    console.log('action', action);
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.post('http://localhost:3000/api/articles/getOne', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        articleId: action.articleId,
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(setOneArticle(response.data));
        })
        // en cas d'echec : catch
        .catch((error) => {
          console.error(error.message);
          console.error(error.response);
        });
      break;
    default:
      next(action);
  }
};

export default logMiddleware;
