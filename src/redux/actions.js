import { SAVE_TEXT } from "./actionTypes";

export const saveText = markdown => ({
    type: SAVE_TEXT,
    text: markdown
});