const express = require('express');
const path = require('path');
const app = express();

let currentGifUrl = "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif"; // default

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/set-gif', (req, res) => {
    const { gifUrl } = req.body;
    if (gifUrl) {
        currentGifUrl = gifUrl;
        console.log("Updated GIF:", currentGifUrl);
        res.sendStatus(200);
    } else {
        res.status(400).send("gifUrl is required");
    }
});

app.get('/current-gif', (req, res) => {
    res.json({ gifUrl: currentGifUrl });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🎥 OBS Background Controller running at http://localhost:${PORT}`);
});
