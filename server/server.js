// server/server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { firstName, lastName, email, message } = req.body;
  console.log('Contact form submitted:', req.body);

  // Here you could send an email or save to a database
  res.json({ success: true, message: 'Form received!' });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
