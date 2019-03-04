import { ADD_SUMMARY } from "../constants/action-types";

export function addSummary(payload) {
    return { type: "ADD_SUMMARY", payload }
}

// this is my action, it is not firing
// is thsi the right place to put it?
export function fetchSummary() {
    return function(dispatch) {
        return fetch("http://localhost:2000/api/summary")
            .then(({ data }) => {
                const { summary } = data;
                dispatch(addSummary(summary));
            });
    };
}