import idb from 'idb';
const VERSION = 3;

const dbPromise = idb.open('public-transportation-db', VERSION, upgradeDB => {
  switch (upgradeDB.oldVersion) {
    case 1:
      upgradeDB.createObjectStore('stations', {
        keyPath: 'station_code'
      });
    case 2:
      upgradeDB.createObjectStore('schedule');
  }
  /* eslint-disable */
});
/* eslint-enable */
export default dbPromise;
