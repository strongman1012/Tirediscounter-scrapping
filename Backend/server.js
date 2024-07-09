// const routes = require('./routes.js');
const  login = require('./components/login');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(cors());

app.post('/login', async (req, res) => {
    const { UserName, Password } = req.body;
    try {
        const cookies = await login(UserName, Password);
        res.json({ success: true, cookies });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
app.post('/search-products', async (req, res) => {
    const { UserName, Password, searchTerm } = req.body;
// console.log(searchTerm);
    try {
        const { success, results } = await login.searchProducts(UserName, Password, searchTerm);
        if (success) {
            res.json({ success: true, results });
        } else {
            res.status(500).json({ success: false, error: 'Search failed.' });
        }
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});