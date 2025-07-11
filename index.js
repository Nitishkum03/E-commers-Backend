const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db/connection');

dotenv.config();
connectDB();

const app = express();
app.use(cors({
    origin: 'https://e-commers-frontend-bay.vercel.app',
    credentials: true
}));
app.use(express.json());

app.use('/api/products', require('./routes/products'));

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World! hanjiiiii kyaa haal chal');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}); 
