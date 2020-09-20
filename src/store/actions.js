import axios from 'axios';

export const GET_DATA = 'GET_DATA';

export const fetchData = (currentId) => async (dispatch) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${currentId}`
  );

  dispatch({
    type: GET_DATA,
    payload: response.data,
  });
};
