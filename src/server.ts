import errorHandler from "errorhandler";

import app from "./app";
import { hostname } from "os";

// Provides full stack for tracing - remove for production
app.use(errorHandler);

// start express server
app.listen(app.get("port"), () => {
    console.log("Server running at port %d", app.get("port"));
});
