import { useReducer, createContext } from "react";

export const userContext = createContext({
  currentUser: {},
  setCurrentUser: () => null,
});

const USER_ACTION_TYPE = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return { ...state, currentUser: payload };

    default:
      throw new Error(`Unknown Type ${type} in User Reducer`);
  }
};

const INITIAL_STATE = {
  currentUser: {},
};

export const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = user;

  const setCurrentUser = (user) => {
    localStorage.setItem("isSignedIn", JSON.stringify(user));
    const action = {
      type: USER_ACTION_TYPE.SET_CURRENT_USER,
      payload: user,
    };
    dispatch(action);
  };

  const value = { currentUser, setCurrentUser };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UserProvider;
