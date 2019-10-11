import app from './app';

const PORT = Number(process.env.PORT) || 4000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () => {
  console.log(`server is running on ${PORT}`);
});
