import {createSlice} from '@reduxjs/toolkit';

/* MODE INFORMATION */

const correction = "Pretend to be an English expert.  Each time I write a sentence, return it to me edited to have better grammar without any comments.";

const example = "Give me an example of a sentence with the following word";

const teacher = "Correct my grammar as if you're an English teacher, explaining what was wrong with my grammar."

/* STATE */ 

const initialState = {
    curMsg: 'correction',
    isLoading: true,
    mode: "Pretend to be an English expert.  Each time I write a sentence, return it to me edited to have better grammar without any comments.",
    input: 'Help me',
    curMode: 'correction',
};

const messageSlice = createSlice({
    name: 'message',
    initialState, 
    reducers: {
        updateInput: (state, action) => {
            state.input = action.payload;
        },
        updateMessage: (state, action) => {
          state.curMsg = action.payload; 
        },
        updateButton: (state, action) => {
            if (action.payload === 1) {
                state.mode = "Pretend to be an English expert.  Each time I write a sentence, return it to me edited to have better grammar without any comments.";
                state.curMode = 'Correction!';
            }
            if (action.payload === 2) {
                state.mode = "Give me an example of a sentence with the following word";
                state.curMode = "Example!"
            }
            if (action.payload === 3) {
                state.mode = "Correct my grammar as if you're an English teacher, explaining what was wrong with my grammar.";
                state.curMode = "Teacher!";
            }
        }
    }
});

// THUNK GOES HERE 
export const sendMessage = () => {

    return async (dispatch, getState) => {
    // get state info
    const info = {mode: getState().message.mode, prompt: getState().message.input};
        // const resopnse
    const response = await fetch('/api/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(info)});
    console.log('hello');
    console.log(response);
    dispatch(updateMessage(await response.json()))
}}

export const { updateInput, updateButton, updateMessage } = messageSlice.actions;

export default messageSlice.reducer;