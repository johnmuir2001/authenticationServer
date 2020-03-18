const express = require("express");
require("./db/mongoose.js");
const userRouter = require("./routes/user-routes.js");
const taskRouter = require("./routes/task-routes.js");

const bcrypt = require("bcrypt");

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// const myFunc = async () => {
//     const password = "red12345!"
//     const hashPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashPassword)

//     const isMatch = await bcrypt.compare("red12345!", hashPassword)
//     console.log(isMatch)
// }
  
app.listen(PORT, () => console.log(`listening on port ${PORT}`));