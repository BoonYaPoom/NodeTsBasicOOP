import { DataSource } from 'typeorm';
import { join } from 'path';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'your-username',
  password: 'your-password',
  database: 'your-database',
  entities: [join(__dirname, '../entity/**/*.ts')],  // โหลด entities ทั้งหมดจากโฟลเดอร์
  synchronize: true,
  logging: true
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((error) => {
    console.error('Error during Data Source initialization:', error);
  });
