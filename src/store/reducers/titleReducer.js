let initState = { value: "Dashboard" };

const titleReducer = (state = initState, action) => {
  if (action.type === "SET_TITLE") return { ...state, value: action.text };
  return state;
};

export default titleReducer;
