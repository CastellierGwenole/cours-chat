// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCm88s3QCEX66x8_zY2IXk4fKuAgnOjVO0',
    authDomain: 'chat-c3d43.firebaseapp.com',
    databaseURL: 'https://chat-c3d43.firebaseio.com',
    projectId: 'chat-c3d43',
    storageBucket: 'chat-c3d43.appspot.com',
    messagingSenderId: '627873138764'
  }
};
