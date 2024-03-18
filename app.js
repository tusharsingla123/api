const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const user_id = `tushar_sin_2412`;
    const email = `tushar1468.be21@chitkara.edu.in.com`;
    const roll_number = `2110991468`;
    const odd_numbers = [];
    const even_numbers = [];
    const alphabets = [];

    data.forEach(item => {
        if (typeof item === 'number') {
            if (item % 2 === 0) {
                even_numbers.push(item);
            } else {
                odd_numbers.push(item);
            }
        } else if (typeof item === 'string') {
            if (/^[A-Za-z]+$/.test(item)) {
                alphabets.push(item.toUpperCase());
            }
        }
    });

    const response = {
        is_success: true,
        user_id: user_id,
        email: email,
        roll_number: roll_number,
        odd_numbers: odd_numbers,
        even_numbers: even_numbers,
        alphabets: alphabets
    };

    res.json(response);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});