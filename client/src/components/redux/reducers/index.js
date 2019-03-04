import { ADD_SUMMARY } from "../constants/action-types";

const initialState = {
    summary: {}
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_SUMMARY) {
        state.summary = action.payload;
    }
    return state;
}

export default rootReducer;