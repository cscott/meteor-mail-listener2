Package.describe({
  name: 'cscottnet:mail-listener2',
  summary: 'mail-listener2 NPM module packaged for Meteor.',
  version: '0.1.8',
  git: 'https://github.com/cscott/meteor-mail-listener2.git'
});

// 0.1.8 wasn't released on npm, alas.
Npm.depends({ 'mail-listener2': 'https://github.com/chirag04/mail-listener2/tarball/25f0d2b9e9fff0c2677fbac1316e3d5df56a2b94' });

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('mail-listener.js', 'server');
  if (api.export) { api.export('MailListener', 'server'); }
});

Package.onTest(function(api) {
  /*
  api.use('tinytest');
  api.use('cscottnet:mail-listener2');
  api.addFiles('mail-listener-tests.js');
  */
});
