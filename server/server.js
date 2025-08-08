// server.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://trudesignweb:Blackbird816@totalhealthcluster0.alep0s4.mongodb.net/?retryWrites=true&w=majority&appName=TotalHealthCluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error(err));

// Contact form schema
const ContactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", ContactSchema);




const NewsletterSchema = new mongoose.Schema({
  email: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const NewsletterSubscriber = mongoose.model('NewsletterSubscriber', NewsletterSchema);





// API route for contact form
app.post("/api/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();

  

    //sending auto emails!! for future reference

    // Optional email notification
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "your-email@gmail.com",
    //     pass: "your-app-password", // Use an App Password for Gmail
    //   },
    // });

    // await transporter.sendMail({
    //   from: req.body.email,
    //   to: "your-email@gmail.com",
    //   subject: "New Contact Form Submission",
    //   text: `
    //     Name: ${req.body.firstName} ${req.body.lastName}
    //     Email: ${req.body.email}
    //     Message: ${req.body.message}
    //   `,
    // });

    res.status(200).json({ message: "Form saved and email sent!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


app.post('/api/newsletter', async (req, res) => {
  try {
    const newSubscriber = new NewsletterSubscriber(req.body);
    await newSubscriber.save();
    res.status(200).json({ message: 'Subscribed successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Subscription failed' });
  }
});




import User from './models/User.js';
import bcrypt from 'bcrypt';

// Register
app.post('/api/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({ email: req.body.email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User created' });
  } catch (err) {
    res.status(400).json({ error: 'User already exists or invalid data' });
  }
});

// Login
app.post('/api/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});





//handle returning users

import jwt from "jsonwebtoken";

const JWT_SECRET = "yourSuperSecretKey"; // ⚠️ Store securely using dotenv in production

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Create token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "2h" });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});



// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
