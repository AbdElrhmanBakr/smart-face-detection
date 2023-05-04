import { useEffect, useReducer, createContext, useContext } from "react";
import { userContext } from "./UserContext";

//! Reducer
export const clarifaiContext = createContext({
  imageURL: "",
  setImageURL: () => null,
  inputURL: "",
  setInputURL: () => null,
  boundingBox: {},
  setBoundingBox: () => null,
});

const CLARIFAI_ACTION_TYPES = {
  SET_IMAGE_URL: "SET_IMAGE_URL",
  SET_INPUT_URL: "SET_INPUT_URL",
  SET_BOUNDING_BOX: "SET_BOUNDING_BOX",
};

const clarifaiRducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLARIFAI_ACTION_TYPES.SET_IMAGE_URL:
      return { ...state, imageURL: payload };

    case CLARIFAI_ACTION_TYPES.SET_INPUT_URL:
      return { ...state, inputURL: payload };

    case CLARIFAI_ACTION_TYPES.SET_BOUNDING_BOX:
      return { ...state, boundingBox: payload };

    default:
      throw new Error(`Unknown Type ${type} in Clarifai Reducer`);
  }
};

const INITIAL_STATE = {
  imageURL: "",
  inputURL: "",
  boundingBox: {},
};

export const ClarifaiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(clarifaiRducer, INITIAL_STATE);
  const { imageURL, inputURL, boundingBox } = state;
  const { currentUser } = useContext(userContext);

  const setImageURL = (image) => {
    const action = {
      type: CLARIFAI_ACTION_TYPES.SET_IMAGE_URL,
      payload: image,
    };
    dispatch(action);
  };

  const setInputURL = (image) => {
    const action = {
      type: CLARIFAI_ACTION_TYPES.SET_INPUT_URL,
      payload: image,
    };
    dispatch(action);
  };

  const setBoundingBox = (boundingBox) => {
    const action = {
      type: CLARIFAI_ACTION_TYPES.SET_BOUNDING_BOX,
      payload: boundingBox,
    };
    dispatch(action);
  };

  // Clear Image if user is changed
  useEffect(() => {
    setImageURL("");
    setInputURL("");
  }, [currentUser]);

  const value = {
    imageURL,
    inputURL,
    setImageURL,
    setInputURL,
    boundingBox,
    setBoundingBox,
  };

  return (
    <clarifaiContext.Provider value={value}>
      {children}
    </clarifaiContext.Provider>
  );
};
