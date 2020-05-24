import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import UserList from "./components/UserList";
import UserCreate from "./components/UserCreate";

function App() {
  return (
    <Provider store={store}>
      <UserCreate />
      <UserList />
    </Provider>
  );
}

export default App;
