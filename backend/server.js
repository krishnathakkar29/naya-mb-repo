import app from "./app.js";
import { connectDB } from "./config/database.js";

connectDB()
.then(() => {
  // process.env.PORT
  app.listen(4000, () => {
    console.log("Server listening at port ", process.env.PORT);
  });
});
