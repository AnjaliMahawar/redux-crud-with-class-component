// import CombineReducer from "../CombineReducer/CombineReducer";
// import { createStore } from "redux";

// export const store=createStore(CombineReducer)


import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

// import { getTableReducer } from "../reducers/getTableReducer";
//  import { deleteReducer } from "./reducers/deleteReducer";
// import { updateReducer } from "./reducers/updateReducer";
//  import { updateEmployeesReducer } from "./reducers/updateEmployeesReducer";
// import { getTableReducer } from "./reducers/getTableReducer";
// import { addReducer } from "./reducers/addReducer";
// // 
import { addReducer } from "../Reducer/addReducer";
import { deleteReducer } from "../Reducer/deleteReducer";
import { updateReducer } from "../Reducer/updateReducer";
import { updateEmployeesReducer } from "../Reducer/updateEmployeesReducer";
const rootRducer = combineReducers({
   
    addReducer,
 
    deleteReducer,
    updateReducer,
    updateEmployeesReducer
})
export const store = legacy_createStore(rootRducer)