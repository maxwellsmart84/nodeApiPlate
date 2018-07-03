import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send({ server: 'online' });
});

const server = app.listen(PORT, () => {
  console.info(`Dev server started on port ${PORT}! Happy coding!`);
});


process.on('SIGINT', () => {
  server.close(() => {
    console.error('Program has unexpectedly stopped, gracefully exiting now');
    process.exit(1);
  });
});
// for tests
export default app;
