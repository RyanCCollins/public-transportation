# Public Transportation
Senior Web P2, Public Transportation App, offline-first progressive web application built to allow user's to plan a trip by train in London, England.

## Getting Started
The projects uses NPM scripts along with Webpack.

The scripts can be referenced from [my open source boilerplate project](https://github.com/RyanCCollins/react-redux-simple-starter).

### Installing
To get the dependencies installed, run
```
npm run setup
```

followed by

```
npm run start
```
To get run the webpack dev server.  The app will be served at `http://localhost:8080/`

## Requirements
* Allows users to select a departure and arrival trainstation
* See a list of trains times, and durations
* Initially, the application should load a default train schedule even when offline
* Use an API or a GTFS file for the data for the public transportation
* If the application is online, your schedule should reflect real-time transit data, informing the user of any delays they may encounter.

## Built With
- [Node](https://nodejs.org/en/) - JS runtime environment
- [npm](https://www.npmjs.com/) - package manager
- [Babel](https://babeljs.io/) - ES6 transpiler
- [Webpack](https://webpack.github.io/) - module bundler & task runner
- [React](https://facebook.github.io/react/) - declarative web UI library
- [react-hot-loader](https://github.com/gaearon/react-hot-loader) - hot reloading for react
- [react-router](https://github.com/rackt/react-router) - react application router
- [react-redux](https://github.com/rackt/react-redux) - react bindings for redux

## Authors

* **Ryan Collins**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Resources
* [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
* [Transport API Documentation](http://docs.transportapi.com/index.html?raml=http://transportapi.com/v3/raml/transportapi.raml)
* [IDB Documentation](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)

## Timeline / Todos
* [x] Configure Service Worker with Webpack to cache all assets
* [x] Retrieve Data from the [Transport API](http://www.transportapi.com/)
* [x] Cache data to IDB for loading when offline
* [x] Add Material UI components when apropos
* [x] Add custom styling to components using React SCSS Modules
* [x] Hydrate Redux store from persisted data
* [ ] Write integration and unit tests
* [ ] Deploy to Heroku
* [ ] Review Code for best practices and meet the [AirBnb style guide](https://github.com/airbnb/javascript)

## Technical Milestones
- Built a dynamic single page application using offline first technologies
- Transpiled cutting edge JavaScript with ES6 using Babel
- Implemented service worker and IDB to provide persistent offline data
- Utilized reachability to determine when the app was offline
- Wrote several dozen reusable React components
- Utilized Redux and unidirectional data-flow to manage dynamic state predictably
- Wrote tests to eliminate regressions and provide a solid user experience
- As always, followed the AirBnB JSX and JavaScript style guides and utilized ESLint to provide exceptional style and code quality
