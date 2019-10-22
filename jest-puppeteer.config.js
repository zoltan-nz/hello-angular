module.exports = {
  launch: {
    devtools: true,
    dumpio: true,
    headless: process.env.HEADLESS !== 'false',
    slowMo: 250,
  },
  server: [
    {
      command: 'yarn start',
      port: 4200,
      launchTimeout: 40000,
      debug: true,
    },
  ],
  exitOnPageError: false,
};
