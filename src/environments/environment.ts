// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'http://localhost:5000/encuestafirestore/us-central1',
  firebase: {
    apiKey: 'AIzaSyC5AyX9RMb2WY0kfc3080gXNDCAlKCojg8',
    authDomain: 'encuestafirestore.firebaseapp.com',
    databaseURL: 'https://encuestafirestore.firebaseio.com',
    projectId: 'encuestafirestore',
    storageBucket: 'encuestafirestore.appspot.com',
    messagingSenderId: '1056026594794',
    appId: '1:1056026594794:web:0943a80cda7600863d7693'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
