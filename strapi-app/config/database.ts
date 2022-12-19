export default ({ env }) => {
  console.log('>>>>>>DATABASE_HOST', env('DATABASE_HOST'));
  console.log('>>>>>>APP_KEYS', env('APP_KEYS'));

  return {
    connection: {
      client: 'mysql',
      connection: {
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        user: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  }
};
