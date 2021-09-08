import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);
app.get('/', (req, res) => res.send('homepage'));
app.all('*', (req, res) => res.send('You tried to reach a route that does not exist'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
