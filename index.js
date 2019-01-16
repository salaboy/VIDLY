const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const genres = [
    { id: 1, name: 'Drama'},
    { id: 2, name: 'Romance'},
    { id: 3, name: 'Action'},
];

//read all genres
app.get('/api/genres', (req, res) => {
    res.send(genres);
});

//creat genre
app.post('/api/genres', (req, res) => {
    //check if there is correct body //use created vaidation function Joi
});

function validateGenre(genre){
    const schema = {
        name: Joi.string().length(3).required()
    };

    return Joi.validate(genre, schema);
};

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));