import express from 'express';

const greetings: Record<string, string> = {
    en: 'Hello',
    hu: 'Szia'
};

const app = express();

app.use(express.json());

app.get('/api/greet', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.get('/api/greet/:name', (req, res) => {
    // read name from URL path (e.g. /api/greet/Béla)
    const name = req.params.name;

    // read language from query params (e.g. /api/greet/Béla?lang=hu)
    const language = req.query.lang as string;

    if (!language) {
        res.status(400).json({ error: 'Language is missing.' });
        return;
    }

    if (!Object.keys(greetings).includes(language)) {
        res.status(404).json({ error: 'Language is not supported.' });
        return;
    }

    res.json({ message: greetings[language] + ' ' + name + '!' });
});

app.post('/api/greet', (req, res) => {
    // request body e.g.: { "lang": "it", "greet": "Ciao" }

    const language = req.body.lang;
    const greet = req.body.greet;

    if (!language || !greet) {
        return res.status(400)
            .json({ error: 'Language and greeting must be given.' });
    }

    if (Object.keys(greetings).includes(language)) {
        return res.status(409).json({ error: 'Language already exists.' });
    }

    greetings[language] = greet;

    res.send();
});

app.listen(3000, () => {
    console.log('Listening on :3000 ...');
});
