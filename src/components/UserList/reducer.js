import createReducer from "../../createReducer";

const handlers = {
  "user/fetch_start": state => ({
    ...state,
    loading: true,
    users: []
  }),
  "user/fetch_end": (state, { users }) => ({
    ...state,
    loading: false,
    users
  })
};

export default createReducer({ users: [] }, handlers);
