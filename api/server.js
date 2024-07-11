const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const fileRoutes = require('./routes/fileRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', fileRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
