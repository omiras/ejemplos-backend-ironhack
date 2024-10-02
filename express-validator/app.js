const express = require('express');
const { query, validationResult } = require('express-validator');
const app = express();

app.use(express.json());
app.get('/hello', body('email').custom(async value => {
    const user = await UserCollection.findUserByEmail(value);
    if (user) {
        throw new Error('E-mail already in use');
    }
}), (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        return res.send(`Hello, ${req.query.person}!`);
    }

    res.send({ errors: result.array() });
});

app.listen(3000);