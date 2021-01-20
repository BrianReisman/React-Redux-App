import { GET_PIX, GET_SUCCESS, GET_FAIL } from "./actions";

const initialState = {
  imageDetails: [{
    author: "",
    download_url: "",
    height: null,
    id: "",
    url: "",
    width: null,
  }],
  isFetching: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PIX:
      return {
        ...state,
        isFetching: true,
      };
    case GET_SUCCESS:
      return {
        ...state,
        isFetching: false,
        imageDetails: action.payload,
      };
    // case GET_FAIL:
    //   return state;
    // // isFetching: false,
    default:
      return state;
  }
};

// const
