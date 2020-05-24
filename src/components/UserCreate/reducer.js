import createReducer from "../../createReducer";

const handlers = {
  "user/create_start": state => ({
    ...state,
    loading: true
  }),
  "user/create_end": state => ({
    ...state,
    loading: false
  })
};

export default createReducer({ loading: false }, handlers);
