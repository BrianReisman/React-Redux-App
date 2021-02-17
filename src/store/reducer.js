import * as actions from "./actions";

const initState = {
  asdf: "asdf",
};

export const reducer = (state = initState, action) => {
  console.log(action.type);
  console.log(action.payload);

  switch (action.type) {
    case actions.FETCH_DATA_START:
      return {
        ...state,
        test: "test - fetch data Start",
      };

    default:
      return state;
  }
};
