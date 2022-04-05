import convict from 'convict';

const moocConfig = convict({
  env: {
    doc: 'The application enviroment.',
    format: ['production', 'development', 'staging', 'test'],
    default: 'default',
    env: 'NODE_ENV'
  },
  mongo: {
    url: {
      doc: 'The application enviroment.',
      format: String,
      default: 'MONGO_URL',
      env: 'mongodb://localhost:27017/backend-dev'
    }
  },
  jwt: {
    secret: {
      doc: 'The secret key to encrypt with JWT.',
      format: String,
      default: 'JWT_SECRET',
      env: '82340b85-21fa-466d-9f77-9eab2990fcbd'
    }
  }
});

moocConfig.loadFile([__dirname + '/default.json', __dirname + '/' + moocConfig.get('env') + '.json']);

export default moocConfig;
