import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import contactsRoutes from './routers/contacts.js';
import { getEnvVar } from './utils/getEnvVar.js';
import { ENV_VAR } from './constants/env.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

const PORT = getEnvVar(ENV_VAR.PORT, 3000);
export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello, Home Page!',
    });
    console.log(`Time: ${new Date().toLocaleString()}`);
    console.log('====================================');
  });

  app.use(contactsRoutes);

  app.use('*', notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log('====================================');
    console.log(`Server is running on port ${PORT}`);
    console.log('====================================');
  });
};

export default setupServer;
