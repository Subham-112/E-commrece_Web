require("dotenv").config();

const Express = require("express");
const app = Express();
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");

const User = require("./model/User-model");

const url = process.env.DB_URL;
const PORT = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(Express.json());

// connect to MongoDB
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to the DB"))
  .catch(() => console.log("❌ Error while Connect to DB"));

app.get("/", (req, res) => {
  res.send("App is running....");
});

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser)
      return res.status(409).json({
        message: "User already exist. Login instead",
        success: false,
      });

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User ({
      username,
      email,
      password: hashPassword,
    });
    await newUser.save();

    res.status(201).json({
      message: "Signup successful",
      success: true,
      username,
      email,
    });
  } catch {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
