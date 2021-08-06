import { createStore, applyMiddleware } from "redux"
import redusers from "./reducers/mainReduser"
import thunk from "redux-thunk"

export const store = createStore(
    redusers,
    {},
    applyMiddleware(thunk)
)
export * as actionCreators from "./action-creators/actions"