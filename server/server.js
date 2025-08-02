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

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
