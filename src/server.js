import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { getEnvVar } from './utils/getEnvVar.js';
import { ENV_VAR } from './constants/env.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import router from './routers/index.js';
import cookieParser from 'cookie-parser';

const PORT = getEnvVar(ENV_VAR.PORT, 3000);

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(cookieParser());

  // app.use(
  //   pino({
  //     transport: {
  //       target: 'pino-pretty',
  //     },
  //   }),
  // );

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello, Home Page!',
    });
    console.log(`Time: ${new Date().toLocaleString()}`);
    console.log('====================================');
  });

  app.use(router);

  app.use('*', notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log('====================================');
    console.log(`Server is running on port ${PORT}`);
    console.log('====================================');
  });
};

export default setupServer;
