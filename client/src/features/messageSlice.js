import {createSlice} from '@reduxjs/toolkit';

/* MODE INFORMATION */

const correction = "Pretend to be an English expert.  Each time I write a sentence, return it to me edited to have better grammar without any comments.";

const example = "Give me an example of a sentence with the following word";

const teacher = "Correct my grammar as if you're an English teacher, explaining what was wrong with my grammar."

/* STATE */ 

const initialState = {
    curMsg: '',
    isLoading: true,
    mode: "Pretend to be an English expert.  Each time I write a sentence, return it to me edited to have better grammar without any comments.",
    input: 'Help me',
    curMode: 'Correcting you, Dave',
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
                state.curMode = 'Correcting you, Dave';
            }
            if (action.payload === 2) {
                state.mode = "Give me an example of a sentence with the following word";
                state.curMode = "Giving you examples, Dave"
            }
            if (action.payload === 3) {
                state.mode = "Correct my grammar as if you're an English teacher, explaining what was wrong with my grammar. Do it while acting like an angry robot";
                state.curMode = "Teaching you, Dave";
            }
            if (action.payload === 4) {
                state.mode = "Have a conversation with me as if you're Hal 9000 from 2001: A Space Odyssey";
                state.curMode = "I can't do that, Dave"
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
    console.log(response);
    dispatch(updateMessage(await response.json()))
}}

export const { updateInput, updateButton, updateMessage } = messageSlice.actions;

export default messageSlice.reducer;