import axios from "axios";

export const GET_PIX = "GET_PIX";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAIL = "GET_FAIL";

export const getPicture = () => (dispatch) => { //*dispatch is a banana
  dispatch({ type: GET_PIX });
  axios
    .get("https://picsum.photos/v2/list")
    .then((res) => {
      console.log(res.data);
      dispatch({type: GET_SUCCESS, payload: res.data})
    })
    .catch((err) => {
      console.log(err);
      dispatch({type: GET_FAIL, payload: err})
    });
};
