import { useEffect, useReducer, createContext } from "react";

//! Clarifai
const PAT = "2b135cd9db254ceab719cc763108e00d";
const USER_ID = "9m2bs48higcq";
const APP_ID = "f024665a17024acfbdc910578f0c8863";
export const MODEL_ID = "face-detection";
export const MODEL_VERSION_ID = "45fb9a671625463fa646c3523a3087d5";

const exportClarifyOptionsObject = (imageLink) => {
  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: imageLink,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };
  return requestOptions;
};

//! Reducer
export const clarifaiContext = createContext({
  imageURL: "",
  setImageURL: () => null,
  inputURL: "",
  setInputURL: () => null,
  clarifaiOptions: {},
  boundingBox: {},
  setBoundingBox: () => null,
});

const CLARIFAI_ACTION_TYPES = {
  SET_IMAGE_URL: "SET_IMAGE_URL",
  SET_INPUT_URL: "SET_INPUT_URL",
  SET_CLARIFAI_OPTIONS: "SET_CLARIFAI_OPTIONS",
  SET_BOUNDING_BOX: "SET_BOUNDING_BOX",
};

const clarifaiRducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLARIFAI_ACTION_TYPES.SET_IMAGE_URL:
      return { ...state, imageURL: payload };

    case CLARIFAI_ACTION_TYPES.SET_INPUT_URL:
      return { ...state, inputURL: payload };

    case CLARIFAI_ACTION_TYPES.SET_CLARIFAI_OPTIONS:
      return { ...state, clarifaiOptions: payload };

    case CLARIFAI_ACTION_TYPES.SET_BOUNDING_BOX:
      return { ...state, boundingBox: payload };

    default:
      throw new Error(`Unknown Type ${type} in Clarifai Reducer`);
  }
};

const INITIAL_STATE = {
  imageURL: "",
  inputURL: "",
  clarifaiOptions: {},
  boundingBox: {},
};

export const ClarifaiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(clarifaiRducer, INITIAL_STATE);
  const { imageURL, inputURL, clarifaiOptions, boundingBox } = state;

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

  useEffect(() => {
    const payload = exportClarifyOptionsObject(inputURL);
    const action = {
      type: CLARIFAI_ACTION_TYPES.SET_CLARIFAI_OPTIONS,
      payload: payload,
    };
    dispatch(action);
  }, [inputURL]);

  const value = {
    imageURL,
    inputURL,
    setImageURL,
    setInputURL,
    clarifaiOptions,
    boundingBox,
    setBoundingBox,
  };

  return (
    <clarifaiContext.Provider value={value}>
      {children}
    </clarifaiContext.Provider>
  );
};
