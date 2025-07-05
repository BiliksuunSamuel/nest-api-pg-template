import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import configuration from '.';
export default (): PostgresConnectionOptions => ({
  database: configuration().database,
  host: configuration().host,
  username: configuration().username,
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  type: 'postgres',
});
