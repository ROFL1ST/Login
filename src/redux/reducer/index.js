const { combineReducers } = require("redux");
const { authProcess } = require("../reducer/authReducer");

export const allReducers = combineReducers({
    auth: authProcess,
})