import idb from 'idb';
const VERSION = 2;

const dbPromise = idb.open('public-transportation-database', VERSION, upgradeDB => {
  switch (upgradeDB.oldVersion) {
    case 1:
      const dbStore = upgradeDB.createObjectStore('stations', {
        keyPath: 'station_code'
      });
      const schedule = upgradeDB.createObjectStore('schedule');
  }
});

export default dbPromise;
