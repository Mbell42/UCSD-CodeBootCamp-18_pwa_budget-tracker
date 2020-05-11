// CREATE DB
let db;

// create a new db request
const request = indexedDB.open("budget", 1);

// create object store
request.onupgradeneeded = (event) => {
    const db = event.target.result;
    db.createObjectStore("pending", { autoIncrement: true });
};

request.onsuccess = ({ target }) => {
    db = target.result;
    if (navigator.onLine) {
        checkDatabase();
    }
};

// log errors here
request.onerror = (event) => {
    console.log(event);
};

// create transaction on pending db, and add record to obectStore
const saveRecord = (record) => {
    console.log(record);
    const transaction = db.transaction("pending", "readwrite");
    const store = transaction.objectStore("pending");
    store.add(record);
}

// get all records from store
const checkDatabase = () => {
    const transaction = db.transaction("pending", "readwrite");
    const store = transaction.objectStore("pending");
    const getAll = store.getAll();

    getAll.onsuccess = () => {
        if (getAll.result.length > 0) {
            fetch("/api/transaction/bulk", {
                method: "POST",
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "appplication/json",
                },
            })
            .then((response) => response.json())
            // delete records
            .then(() => {
                const transaction = db.transaction("pending", "readwrite");
                const store = transaction.objectStore("pending");
                store.clear();
            })
        }
    }
}



// EVENT LISTENERS
// listener for when app comes back online
window.addEventListener("online", checkDatabase)