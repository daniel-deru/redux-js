import { combineReducers } from "redux"
import accountReduser from "./accountReducer"

const redusers = combineReducers({
    account: accountReduser
})

export default redusers