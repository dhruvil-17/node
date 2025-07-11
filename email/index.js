const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.json());

// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dhruvildodia91@gmail.com",
    pass: "qbbjykkdiaiqpvei", // use App Password, not your Gmail password
  },
});
app.get("/", (req, res) => {
  return res.send("<h1>Home page</h1>");
});

// API to send email
app.post("/email", async (req, res) => {
  // const { to, subject, text } = req.body; used if we want to enter details dynamically from postman

  try {
    await transporter.sendMail({
      from: "dhruvildodia91@gmail.com",
      to: "djgohil3427@gmail.com",
      subject: "test email",
      text: "This is a test email",

      attachments:[{
        filename : 'demo.pdf',
        path : './demo.pdf'
      }]
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email", error });
  }
});

// Server
app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
