module.exports = {
    apps: [
      {
        name: 'project-2025',
        script: 'dist/server.js',
        instances: 1,
        autorestart: true,
        watch: false,
      },
    ],
  };
  