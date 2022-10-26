const express = require('express');

const app = express();

app.listen(9000, () =>
	console.log(`app listening on Port http://localhost:9000`)
);