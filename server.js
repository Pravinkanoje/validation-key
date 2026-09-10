const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Validation Key from .env
const VALIDATION_KEY = process.env.VALIDATION_KEY;

// Routes

// 1. Home Page
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Pi Network Demo App',
    status: 'running',
    validationKey: VALIDATION_KEY ? 'Set' : 'Not Set'
  });
});

// 2. Get Validation Key
app.get('/api/validation-key', (req, res) => {
  if (!VALIDATION_KEY) {
    return res.status(404).json({ error: 'Validation key not found' });
  }
  res.json({
    validationKey: VALIDATION_KEY,
    status: 'valid'
  });
});

// 3. Verify Validation Key
app.post('/api/verify', (req, res) => {
  const { key } = req.body;
  
  if (!key) {
    return res.status(400).json({ error: 'No key provided' });
  }
  
  if (key === VALIDATION_KEY) {
    return res.json({
      status: 'verified',
      message: 'Validation key is correct!',
      timestamp: new Date()
    });
  }
  
  res.status(401).json({
    status: 'failed',
    message: 'Invalid validation key'
  });
});

// 4. App Info
app.get('/api/info', (req, res) => {
  res.json({
    appName: 'My Tube - Pi Network',
    version: '1.0.0',
    validationStatus: VALIDATION_KEY ? 'Configured' : 'Not Configured',
    environment: process.env.NODE_ENV || 'development'
  });
});

// 5. Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date(),
    uptime: process.uptime()
  });
});

// 6. Validation Key File (for domain verification)
app.get('/validation-key.txt', (req, res) => {
  if (!VALIDATION_KEY) {
    return res.status(404).send('Validation key not found');
  }
  res.type('text/plain').send(VALIDATION_KEY);
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Pi Network Demo App running on http://localhost:${PORT}`);
  console.log(`✅ Validation Key: ${VALIDATION_KEY ? 'Configured' : 'NOT CONFIGURED'}`);
});
