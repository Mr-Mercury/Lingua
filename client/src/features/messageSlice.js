import {createSlice} from '@reduxjs/toolkit';

/* MODE INFORMATION */

const correction = "Pretend to be an English expert.  Each time I write a sentence, return it to me edited to have better grammar without any comments.";

const example = "Give me an example of a sentence with the following word";

const explanation = "Correct my grammar as if you're an English teacher, explaining what was wrong with my grammar."

/* STATE */ 

const initialState = {
    curMsg: 'Enter a sentence to have its grammar corrected, or press one of the buttons below to change mode',
    isLoading: true,
    mode: correction,
    input: 'Help me',
};

const messageSlice = createSlice({
    name: 'message',
    initialState, 
    reducers: {
        updateInput: (state, action) => {
            console.log(action.payload);
            state.input = action.payload;
        },
        sendMessage: (state, action) => {
            const info = {mode: state.mode, prompt: action.payload};

            fetch('/api/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(info),
            })
        },
        updateMessage: (state, action) => {

        }
    }
});
export const { updateInput, sendMessage, updateMessage } = messageSlice.actions;

export default messageSlice.reducer;