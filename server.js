// server.js
const express = require('express');
const { z } = require('zod');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Zod schema for validation
const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long")
});

// Middleware for validation
app.post('/register', (req, res) => {
  try {
    userSchema.parse(req.body);
    res.status(200).send('User registration successful');
  } catch (e) {
    res.status(400).send(e.errors);
  }
});

// Serve static files from the public directory
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
