const { GROUPS } = require('./constant');

module.exports = {
  root: {
    type: 'string',
    default: process.cwd(),
    description: 'where to start svrx',
    defaultHint: 'default to the current working directory',
    group: GROUPS.CORE,
    cli: false,
    ui: false,
  },
  svrx: {
    alias: 'v',
    type: 'string',
    description: 'the version of svrx you want to use',
    defaultHint: 'default to the latest version installed locally',
    group: GROUPS.CORE,
    ui: false,
  },
  port: {
    type: 'number',
    default: 8000,
    description: 'Specify a port number to listen for requests on',
    group: GROUPS.CORE,
  },
  https: {
    description: 'enable https',
    type: 'boolean',
    group: GROUPS.CORE,
  },
  urls: {
    type: 'object',
    properties: {
      style: {
        type: 'string',
        default: '/svrx/svrx-client.css',
        group: GROUPS.CORE,
        cli: false,
        ui: false,
      },
      script: {
        type: 'string',
        default: '/svrx/svrx-client.js',
        group: GROUPS.CORE,
        cli: false,
        ui: false,
      },
      external: {
        type: 'string',
        group: GROUPS.CORE,
        cli: false,
        ui: false,
      },
      local: {
        type: 'string',
        group: GROUPS.CORE,
        cli: false,
        ui: false,
      },
      ui: {
        type: 'string',
        group: GROUPS.CORE,
        cli: false,
        ui: false,
      },
    },
  },
  middlewares: {
    type: 'array',
    group: GROUPS.CORE,
  },

  // built plugin configs
  serve: {
    description: 'dev server configs',
    group: GROUPS.COMMON,
    default: true,
    anyOf: [
      {
        type: 'boolean',
      },
      {
        type: 'object',
        properties: {
          base: {
            type: 'string',
            description: 'where to serve static content from',
          },
          directory: {
            type: 'boolean',
            description: 'Enable serveIndex middleware',
          },
          historyApiFallback: {
            description: 'Enable historyApiFallback middleware',
            anyOf: [{ type: 'boolean' }, { type: 'object' }],
            errorMessage: 'should be boolean or object',
          },
        },
      },
    ],
    errorMessage: 'should be boolean or object',
  },

  proxy: {
    description: 'proxy requests configs',
    group: GROUPS.COMMON,
    anyOf: [
      {
        type: 'boolean',
      },
      {
        type: 'object',
      },
      {
        type: 'array',
      },
    ],
    errorMessage: 'should be boolean, array or object',
  },

  livereload: {
    description: 'enable auto live reload',
    group: GROUPS.COMMON,
    default: true,
    anyOf: [
      {
        type: 'boolean',
      },
      {
        type: 'object',
        properties: {
          exclude: {
            description: 'specify patterns to exclude from file watchlist',
            anyOf: [
              { type: 'string' },
              { type: 'array', items: { type: 'string' } },
            ],
            errorMessage: 'should be string or array of string',
          },
        },
      },
    ],
    errorMessage: 'should be boolean or object',
  },

  cors: {
    description: 'Cross-Origin Resource Sharing(CORS)',
    group: GROUPS.COMMON,
    default: true,
    anyOf: [
      {
        type: 'boolean',
      },
      {
        type: 'object',
      },
    ],
    errorMessage: 'should be boolean or object',
  },
  open: {
    description: 'open something after server starting',
    group: GROUPS.COMMON,
    default: 'local',
    anyOf: [
      {
        type: 'boolean',
      },
      {
        type: 'string',
      },
    ],
    errorMessage: 'should be boolean or string',
  },
  logger: {
    description: 'global logger setting',
    group: GROUPS.COMMON,
    type: 'object',
    properties: {
      level: {
        type: 'string',
        default: 'warn',
        description: 'set log level, predefined values: \'silent\',\'notify\',\'error\',\'warn\', \'debug\'',
      },
    },
    errorMessage: 'should be an object',
  },
};
