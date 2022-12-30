const express = require("express");
const morgan = require("morgan");
const errorHandler = require("./middleware/errorHandler");
const userRouter = require("./routes/userRoutes");

const PORT = 5000;

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/users", userRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server running on PORT: ${PORT}`);
});
