import axios from 'axios';
import { ON_SUBMIT_LOGIN, setUsersLogin } from 'src/store/reducer';


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
        mail: store.getState().email,
        password: store.getState().password,
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(setUsersLogin(response.data.token, response.data.id));
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
