const { writeFileSync, mkdirSync } = require('fs');
/*const OUT_DIR = '.vercel/output';

mkdirSync(`${OUT_DIR}/functions/ssr.func`, { recursive: true });

// Write the Vercel Build Output config file
writeFileSync(
  `${OUT_DIR}/config.json`,
  JSON.stringify({
    version: 1,
    routes: [
      { src: '/.*', dest: '/ssr' } // Route all requests to SSR
    ]
  })
);

//Write the serverless function configuration
writeFileSync(
  `${OUT_DIR}/functions/ssr.func/.vc-config.json`,
  JSON.stringify({
    runtime: 'nodejs18.x',
    handler: 'index.js',
    launcherType: 'Nodejs',
  })
);

// Write the serverless function entry point*/

// Write a vercel.json
writeFileSync(
  'vercel.json',
  JSON.stringify({
    version: 2,
    public: true,
    name: 'application',
    rewrites: [
      {
        source: '/(.*)',
        destination: '/api',
      }
    ],
    functions: {
      'api/index.js': {
        includeFiles: 'dist/application/**'
      }
    }
  })
)
