# HSR.Metristic
Node.js based checking and metric web service.

* [HSR.Metristic.Core](https://github.com/wasabideveloper/HSR.Metristic.Core): Metristic web application
* [HSR.Metristic.Plugin.General](https://github.com/wasabideveloper/HSR.Metristic.Plugin.General): Structure visualization and regex check plugin
* [HSR.Metristic.Plugin.Web](https://github.com/wasabideveloper/HSR.Metristic.Plugin.Web): Web check plugins


## Documentation

* Project documentation: [GitHub Wiki](https://github.com/wasabideveloper/HSR.Metristic/wiki)
* [All issues](https://github.com/wasabideveloper/HSR.Metristic/issues), Current teration: [Open issues](https://github.com/wasabideveloper/HSR.Metristic/issues?q=is%3Aopen+is%3Aissue+milestone%3A%2A+no%3Aassignee) | [In progress](https://github.com/wasabideveloper/HSR.Metristic/issues?utf8=%E2%9C%93&q=is%3Aopen%20is%3Aissue%20milestone%3A*%20assignee%3A*)
* [Milestones](https://github.com/wasabideveloper/HSR.Metristic/milestones)


## Lisence
![Apache License Version 2.0](https://www.apache.org/img/asf_logo.png)
[Apache License Version 2.0](./LICENSE)


## Releases / Production

⬇ Download on the [Release page](https://github.com/wasabideveloper/HSR.Metristic/releases)

### Installation

* Install [node.js](https://nodejs.org/en/)
* Verify wc is available: `which wc`
* Extract archive
* Enter the extracted directory, e.g. `cd Metristic-1.0`.
* Run `npm install --production` to install the dependencies.

### Start

* Run `node dist/app/index.js` or `node app/index.js` (depends the release, details see release page) to start the application.
* Open `localhost:8080` in your browser.


## Development

### Global dependencies

* Node.js / npm

### Installation

* Install global dependencies
* Clone project
* Run `npm install --no-optional` to install the dependencies.
* Install typings depencency `npm run typings install`

### Link Metristic Core if you develop local

1. Clone Metristic Core
2. Create global link `cd Metristic.Core; sudo npm link`.
3. Add `"metristic-core": "^0.2.0",` in project.json of your deployment repository to your dependencies.
4. Run `npm link metristic-core` in your project repository.

Npm will create 2 links: `Metristic/HSR.Metristic.Plugin.General/node_modules/metristic-core -> /usr/lib/node_modules/metristic-core -> Metristic/HSR.Metristic.Core`.

"metristic-core" must match the name in project.json


### Commands

Watch files and compile TS to JS on changes:
```shell
npm run gulp watch
```
Serve app:
```shell
npm run gulp serve
# or
npm start
```
Deploy app to directory `deploy`:
```shell
npm run gulp deploy
```
Access app:
`localhost:8080`

To restart manual type `rs` and return.

Pack release (create zip archive of compiled code)
```shell
npm run pack-release
```


### Install new type declarations:
```shell
# express example
typings install express --save
# node / jasmine
typings install dt~node dt~jasmine --global --save
```


## Create your own metristic plugin

1. Create a repository like `HSR.Metristic.Plugin.General`. Don't forget main & typings field in project.json. Otherwise it will not be possible to link JS & TS.
2. If you develop localy, create a global package link: `sudo npm link`.
3. Add your repository as dependency to Metrisitc project.json. Link it if you work localy (`npm link metristic-plugin-itsname`).
4. `npm install`
5. Require and use it.


## Docker image

Docker will clone the newest development source from GitHub, build from source, remove all dependencies and install only production dependencies.

### Build

```shell
docker build --no-cache -t <organization>/metristic .
# or
npm build-container
```

### Run

```shell
docker run -p 8080:8080 -it --rm --name metristic <organization>/metristic
# or
npm run-container
```
Open `localhost:8080` in your browser.

### Stop container

```shell
docker stop metristic
# or
npm stop-container
```

### Manage container

https://nodejs.org/en/docs/guides/nodejs-docker-webapp/


## Various

https://www.airpair.com/typescript/posts/typescript-development-with-gulp-and-sublime-text
