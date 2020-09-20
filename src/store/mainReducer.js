import {GET_DATA} from './actions';

const initialState = {
  id: 1,
  userId: 1,
  completed: false,
  title: 'hi there',
};

export default function mainReducer(state = initialState, action) {
  const {type, payload} = action;
  console.log(payload);
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        id: payload.id + 1,
        userId: payload.userId,
        title: payload.title,
        completed: payload.completed,
      };
    default:
      return state;
  }
}
