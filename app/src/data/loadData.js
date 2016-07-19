import stops from 'raw!./gtfsdata/stops.txt';
import routes from 'raw!./gtfsdata/routes.txt';
import stopTimes from 'raw!./gtfsdata/stop_times.txt';
const data = {
  routes,
  stops,
  stopTimes
};

export default data;
