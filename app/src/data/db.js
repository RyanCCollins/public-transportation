import idb from 'idb';
const VERSION = 2;

const dbPromise = idb.open('public-transportation-db', VERSION, upgradeDB => {
  /* eslint-disable */
  switch (upgradeDB.oldVersion) {
    case 1:
      const dbStore = upgradeDB.createObjectStore('stations', {
        keyPath: 'station_code'
      });
      const schedule = upgradeDB.createObjectStore('schedule', {
        keyPath: 'train_uid'
      });
  }
});
/* eslint-enable */
export default dbPromise;
