// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    // Initialize Firebase
    apiKey: "AIzaSyD_otu191iJV5AZr5LJ_VMaTyAViOtj8OI",
    authDomain: "clientpanelprod-2bf90.firebaseapp.com",
    databaseURL: "https://clientpanelprod-2bf90.firebaseio.com",
    projectId: "clientpanelprod-2bf90",
    storageBucket: "clientpanelprod-2bf90.appspot.com",
    messagingSenderId: "422429077126"

  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
