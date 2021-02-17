import * as actions from "./actions";

const initState = {
  quote: "",
  isLoading: false,
  error: "",
};

export const reducer = (state = initState, action) => {
  console.log(action.type);
  console.log(action.payload);

  switch (action.type) {
    case actions.FETCH_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case actions.FETCH_DATA_SUCCESS:
      return {
        ...state,
        quote: action.payload,
        isLoading: false,
        error: "",
      };
    case actions.FETCH_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        error: "What did you do?!!",
      };
    default:
      return state;
  }
};
