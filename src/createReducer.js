export default function createReducer(initialState, handler) {
  return function reducer(state = initialState, action) {
    const { type } = action;
    if (!Object.prototype.hasOwnProperty.call(handler, type)) {
      return state;
    }
    return handler[type](state, action);
  };
}
