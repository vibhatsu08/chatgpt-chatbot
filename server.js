const express = require("express");
const app = express();
app.use(express.static('public'));
const dotenv = require("dotenv");
const openai = require("openai");
dotenv.config();

const api_key = process.env.OPENAI_API_KEY;
const gpt = new openai.OpenAIApi({apiKey: api_key});

app.get("/output", async (request, response) => {
    const prompt = request.query.prompt;
    try {
        const completion = await gpt.createCompletion({
            model: "text-davinci-003",
            prompt,
            max_tokens: 4000,
        });
        const output = completion.data.choices[0].text.trim();
        response.send(output);
    } catch (error) {
        console.log(error);
        response.status(500).send("Error");
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
