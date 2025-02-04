import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from './src/config/db.js';
import sessionConfig from "./src/config/sessionConfig.js";
import authRoutes from "./src/routes/authRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));
app.use(sessionConfig);
app.use(cors({
    origin: "*",
}))

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// Start Server



app.get("/", (req, res) => {
    return res.json({message:"Hello i am working fine"});
});

const PORT = process.env.PORT || 4000 ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
