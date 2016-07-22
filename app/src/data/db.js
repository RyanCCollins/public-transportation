import idb from 'idb';
const VERSION = 1;

const dbPromise = idb.open('public-transportation-db', VERSION, upgradeDB => {
  const keyValStore = upgradeDB.createObjectStore('key-val');
  keyValStore.put('world', 'hello');
});


export default dbPromise;
