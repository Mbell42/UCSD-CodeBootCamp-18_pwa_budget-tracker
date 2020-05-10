// create the database
let db;

// create a new db request
const request = indexedDB.open("budget", 1);

// EVENT LISTENERS
// listener for when app comes back online