import { createStore, combineReducers } from "redux";
import { usersReducer } from "./users/users-reducers";
import { devToolsEnhancer } from "@redux-devtools/extension";

const enhancer = devToolsEnhancer()

const rootReducer = combineReducers({ users: usersReducer });

export const store = createStore(rootReducer, enhancer);
 