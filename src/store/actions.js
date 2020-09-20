import axios from 'axios';

export const GET_DATA = 'GET_DATA';

export const fetchData = (currentId) => async (dispatch) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${currentId}`
  );
  // this case to enjoy any delay as u want, it can work without it, like below
  // setTimeout(() => {
  //   dispatch({
  //     type: GET_DATA,
  //     payload: response.data,
  //   });
  // }, 7000);

  dispatch({
    type: GET_DATA,
    payload: response.data,
  });
};
