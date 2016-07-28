import idb from 'idb';
const VERSION = 0;

const dbPromise = idb.open('public-transportation-db', VERSION, upgradeDB => {
  switch (upgradeDB.oldVersion) {
    case 0:
      const dbStore = upgradeDB.createObjectStore('stations', {
        keyPath: 'station_code'
      });
      const scheduleStore = upgradeDB.createObjectStore('schedule', {
        keyPath: 'departure'
      });
  }
});

export default dbPromise;
