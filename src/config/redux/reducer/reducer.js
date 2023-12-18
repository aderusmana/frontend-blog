import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import globalReducer from "./globalReducer";
import createPostReducer from "./createPostReducer";


const reducer = combineReducers({globalReducer,homeReducer,createPostReducer })


export default reducer