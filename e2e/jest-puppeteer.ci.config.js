module.exports = {
  launch: {
    devtools: false,
    dumpio: true,
    headless: true,
  },
  server: [
    {
      command: 'yarn start',
      port: 4200,
      launchTimeout: 120000,
      debug: true,
    },
  ],
  exitOnPageError: false,
};
