import express from 'express';
import routes from './routes/main';

const app = express();
const port = 3000;

app.use(routes);
const server = app.listen(port, () => {
  console.log(`your server at http://localhost:${port}`);
});

export default server;
