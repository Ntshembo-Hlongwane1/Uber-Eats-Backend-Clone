import express from 'express';
import { connect, ConnectOptions } from 'mongoose';
import { config } from 'dotenv';
import StoreRoutes from './Routes/Store.routes';
config();

const server = express();
const mongoURI = process.env.mongoURI;

const connectionOptions: ConnectOptions = { useNewUrlParser: true, useUnifiedTopology: true };
connect(mongoURI, connectionOptions, error => {
  if (error) {
    return console.error(error);
  }
  console.log('Server connected to DB');
});

server.use(StoreRoutes);

const PORT = process.env.PORT ?? 5000;
server.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
