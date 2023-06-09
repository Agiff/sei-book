require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routers');
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '50mb' }));
app.use(router);

app.listen(PORT, () => {
  console.log('App is running on PORT', PORT);
});