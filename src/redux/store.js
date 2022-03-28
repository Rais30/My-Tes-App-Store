import {createStore} from 'redux';

const initialState = {
  user: null,
  acces_token: null,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_LOGIN') {
    return {
      ...state,
      user: action.value.user,
      acces_token: action.value.acces_token,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
