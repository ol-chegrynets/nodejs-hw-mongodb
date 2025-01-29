// import 'dotenv/config';
import dotenv from 'dotenv';
dotenv.config();

export const getEnvVar = (envName, defaultPort) => {
  const envVar = process.env[envName];

  if (envVar) return envVar;

  if (defaultPort) return defaultPort;

  throw new Error(`Environment variable with name ${envVarName} is not set.`);
};
