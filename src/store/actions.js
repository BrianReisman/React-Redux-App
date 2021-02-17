import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

const fetchDataStart = () => {
  return { type: FETCH_DATA_START };
};

const fetchDataSuccess = (data) => {
  return { type: FETCH_DATA_SUCCESS, payload: data };
};

const fetchDataFail = (err) => {
  return { type: FETCH_DATA_FAIL, payload: err };
};

export const getData = (searchText) => {
  return (dispatch) => {
    dispatch(fetchDataStart());
    axios
      .get("https://api.taylor.rest/")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // return {type: GET_DATA, payload: searchText}
};
