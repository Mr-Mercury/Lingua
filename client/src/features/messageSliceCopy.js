import {createSlice} from '@reduxjs/toolkit';

/* MODE INFORMATION */

const correction = "Pretend to be an English expert.  Each time I write a sentence, return it to me edited to have better grammar without any comments.";

const example = "Give me an example of a sentence with the following word";

const teacher = "Correct my grammar as if you're an English teacher, explaining what was wrong with my grammar."

/* STATE */ 

const initialState = {
    curMsg: correction,
    isLoading: true,
    mode: correction,
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
            
        },
        updateButton: (state, action) => {
            if (action.payload === 1) {
                state.mode = correction;
                state.curMode = 'Correction!';
            }
            if (action.payload === 2) {
                state.mode = example;
                state.curMode = 'Example!';
            }
            if (action.payload === 3) {
                state.mode = teacher;
                state.curMode = 'Teacher!';
            }
        }
    }
});
export const { updateInput, updateButton, sendMessage, updateMessage } = messageSlice.actions;

export default messageSlice.reducer;