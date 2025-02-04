import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import "./config/db.js"; // Connect MongoDB
import "./config/passport.js"; // Initialize Passport
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(8000, () => console.log("Server running on port 8000"));


// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
// app.use(express.static("public"));
// app.use(sessionConfig);
// app.use(cors({
//     origin: "*",
// }))
// app.get("/", (req, res) => {
//     return res.json({message:"Hello i am working fine"});
// });