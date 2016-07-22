import idb from 'idb';
const VERSION = 3;

const dbPromise = idb.open('public-transportation-db', VERSION, upgradeDB => {
  const dbStore = upgradeDB.createObjectStore('stations', {
    keyPath: 'station_code'
  });
  dbStore.createIndex('by-station_code', 'station_code');
});

export default dbPromise;
