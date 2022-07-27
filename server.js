const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(cors({origin:"http://localhost:3000"}));
require("./server/config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));
const AuthorRoutes = require("./server/routes/author.route");
AuthorRoutes(app);

app.listen(port, () => console.log(`Server is running on port ${port}`) );
