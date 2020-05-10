//==CACHE SETTINGS==
const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "index.js",
    "/manifest.webmanifest",
    "/style.css"
];

const PRECACHE = "precache-v1";
const RUNTIME = "runtime";

//==EVENT LISTENERS==
//event listener - INSTALL
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open()
        .then()
        .then()
    )
})

//event listener - FETCH
self.addEventListener("fetch", (event) => {
    
})