const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/user');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
