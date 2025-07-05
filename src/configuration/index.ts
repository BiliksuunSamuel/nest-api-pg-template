import * as dotenv from 'dotenv';

dotenv.config();

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  connectionString: process.env.CONNECTION_STRING,
  jwtSecret: process.env.JWT_SECRET,
  database: process.env.DATABASE,
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
});
