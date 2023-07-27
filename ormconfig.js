const dbConfig = {
  synchronize: true,
  migrations: [__dirname + `/migrations/**/*{.ts,.js}`],
};

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(dbConfig, {
      type: 'postgres',
      autoLoadEntities: true,
    });
    break;

  case 'test':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'test.sqlite',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    });
    break;

  case 'production':
    Object.assign(dbConfig, {
      type: 'postgres',
      url: process.env.DATABASE_URL,
      migrationsRun: true,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      ssl: {
        rejectUnauthorized: false,
      },
    });
    break;

  default:
    throw new Error('unknown environment');
}

module.exports = dbConfig;
