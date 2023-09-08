const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const knex = require('knex')(
	require('./knexfile.js')[process.env.NODE_ENV || 'development']
);
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/movies', (req, res) => {
	knex('movies')
		.select('*')
		.then((data) => res.status(200).json(data))
		.catch((err) =>
			res.status(404).json({
				message:
					'The data you are looking for could not be found. Please try again',
			})
		);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
