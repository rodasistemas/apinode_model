import "dotenv/config.js";

import app from "./app.js";

app.listen(process.env.PORT, () => {
    console.log(` Backend run in ${process.env.PORT}`);
});
