// import {createSlice} from '@reduxjs/toolkit';
// import { Configuration, OpenAIApi } from 'openai';

// const OPENAI_SECRET_KEY='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';

// const config = new Configuration({
//     apiKey: OPENAI_SECRET_KEY
// });

// const openai = new OpenAIApi(config);

// async function sendPrompt(mode, qry) {
//     const model = 'gpt-3.5-turbo';
//     const messages = [
//         {   
//             'role': 'system',
//             'content': mode,
//         },
//         {
//             'role': 'user',
//             'content': qry,
//         }
//     ];
//     const chatComplete = await openai.createChatCompletion({
//         model, messages
//     })
//     return chatComplete.data.choices[0].message.content;
// };

// // app.post('/api', async (req, res) => {
// //     const { prompt } = req.body;
// //     const { mode } = req.body;
// //     try {
// //         const newMsg = await sendPrompt(mode, prompt); 
// //         console.log(newMsg);
// //         return res.status(200).send(newMsg)
// //     } catch (err) {console.log(err)};
// // })
// /* MODE INFORMATION */

// const correction = "Pretend to be an English expert.  Each time I write a sentence, return it to me edited to have better grammar without any comments.";

// const example = "Give me an example of a sentence with the following word";

// const teacher = "Correct my grammar as if you're an English teacher, explaining what was wrong with my grammar."

// /* STATE */ 

// const initialState = {
//     curMsg: correction,
//     isLoading: true,
//     mode: correction,
//     input: 'Help me',
//     curMode: 'correction',
// };

// const messageSlice = createSlice({
//     name: 'message',
//     initialState, 
//     reducers: {
//         updateInput: (state, action) => {
//             state.input = action.payload;
//         },
//         sendMessage: (state, action) => {
//             const mode = state.mode;
//             const prompt = action.payload;
//             console.log (mode, prompt);
//             state.curMsg = sendPrompt(mode,prompt);
//         },
//         updateMessage: (state, action) => {
            
//         },
//         updateButton: (state, action) => {
//             if (action.payload === 1) {
//                 state.mode = correction;
//                 state.curMode = 'Correction!';
//             }
//             if (action.payload === 2) {
//                 state.mode = example;
//                 state.curMode = 'Example!';
//             }
//             if (action.payload === 3) {
//                 state.mode = teacher;
//                 state.curMode = 'Teacher!';
//             }
//         }
//     }
// });
// export const { updateInput, updateButton, sendMessage, updateMessage } = messageSlice.actions;

// export default messageSlice.reducer;