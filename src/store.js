import { createStore } from "redux";
import reducer from "./reducer/reduser";

const store = createStore(reducer);

export default store;