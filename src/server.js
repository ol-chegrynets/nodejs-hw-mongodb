import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { getEnvVar } from './utils/getEnvVar.js';
import { ENV_VAR } from './constants/env.js';

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
  app.use((req, res, next) => {
    console.log(`Time: ${new Date().toLocaleString()}`);
    console.log('====================================');
  });

  app.use('*', (req, res, next) => {
    res.statusMessage(404).json({
      message: 'Not Found',
    });
  });
  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });
  app.listen(PORT, () => {
    console.log('====================================');
    console.log(`Server is running on port ${PORT}`);
    console.log('====================================');
  });
};
