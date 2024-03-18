import app from "./app.js";
import { connectDB } from "./config/database.js";

connectDB()
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server listening at port ", process.env.PORT);
  });
});
