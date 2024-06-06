const express = require('express');
const { z } = require('zod');

const app = express();
const PORT = 3000;


app.use(express.json());


const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long")
});

app.post('/register', (req, res) => {
  try {
    userSchema.parse(req.body);
    res.status(200).send('User registration successful');
  } catch (e) {
    res.status(400).json(e.errors);
  }
});


app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
