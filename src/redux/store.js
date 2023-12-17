import { applyMiddleware, createStore  } from "redux";

import movieRuducer from "./reducers/movieReducer";
import { thunk } from "redux-thunk";

export default createStore(movieRuducer,applyMiddleware(thunk));
