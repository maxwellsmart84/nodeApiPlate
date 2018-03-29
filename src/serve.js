import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Dev server started on port ${PORT}! Happy coding!`);
});

app.get('/', (req, res) => {
  res.status(200).send('A-OK');
});
