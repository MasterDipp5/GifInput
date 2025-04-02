const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let currentGifUrl = "https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif";

app.post('/set-gif', (req, res) => {
    const { gifUrl } = req.body;
    if (!gifUrl) return res.status(400).send("Missing gifUrl");
    currentGifUrl = gifUrl;
    res.sendStatus(200);
});

app.get('/current-gif', (req, res) => {
    res.json({ gifUrl: currentGifUrl });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🔥 Server running on port ${PORT}`);
});
