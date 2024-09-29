const express = require('express');
const dotenv = require('dotenv');
const router = require('./src/routes/routes');
const handleLog = require('./src/middlewares/handleLog');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(handleLog);
app.use('/', router);


const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});