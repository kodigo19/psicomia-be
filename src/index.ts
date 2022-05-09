import app from "./app";
import { mongooseConnection } from "./config/mongoose.config";

mongooseConnection(`${process.env.MONGO_URI}`);
app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));