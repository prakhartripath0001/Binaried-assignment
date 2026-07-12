const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:4200' }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api', authRoutes);
app.use('/api/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
