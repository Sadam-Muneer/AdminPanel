require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authroute = require("./router/auth_router");
const contactRoute = require("./router/contact_router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error_handling");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));
// middleware for incoming request from postman into body
app.use(express.json());

app.use("/api/auth", authroute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);
//lets define admin route

app.use(errorMiddleware);
const PORT = 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
