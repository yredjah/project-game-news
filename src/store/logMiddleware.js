import axios from 'axios';
import {
  ON_SUBMIT_LOGIN,
  setUsersLogin,
  ON_SUBMIT_REGISTER,
  cleanRegisterFileds,

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
          store.dispatch(setUsersLogin(response.data));
          sessionStorage.setItem('userData', JSON.stringify(store.getState().userData));
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
    default:
      next(action);
  }
};

export default logMiddleware;
