const express = require('express');
const router = express.router();
var app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {

    console.log(`server listening in port ${PORT}`);

});
