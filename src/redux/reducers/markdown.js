import { SAVE_TEXT } from "../actionTypes";

const initialState = {
    text: ''
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SAVE_TEXT: {
            return {
                ...state,
                text: action.text
            }
        };
        default:
            return state;
    }
};