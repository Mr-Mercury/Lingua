import { Configuration, OpenAIApi } from 'openai';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(require('cors')());

require('dotenv').config();

const openAIkey = process.env.OPENAI_SECRET_KEY;

const config = new Configuration({
    apiKey: openAIkey
});

const openai = new OpenAIApi(config);

async function sendPrompt(mode, qry) {
    const model = 'gpt-3.5-turbo';
    const messages = [
        {   
            'role': 'system',
            'content': mode,
        },
        {
            'role': 'user',
            'content': qry,
        }
    ];
    const chatComplete = await openai.createChatCompletion({
        model, messages
    })
    return chatComplete.data.choices[0].message.content;
};

//TODO: turn this into an actual router later
//THIS WILL UPDATE THE MESSAGE VARIABLE IN STATE I HOPE
app.post('/api', async (req, res) => {
    const { prompt } = req.body;
    const { mode } = req.body;
    try {
        const newMsg = await sendPrompt(mode, prompt); 
        console.log(newMsg);
        return res.status(200).send(newMsg)
    } catch (err) {console.log(err)};
})

app.listen(port, () => console.log(`Server started on ${port}`));