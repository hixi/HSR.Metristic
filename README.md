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
* wc
* Typescript Compiler ```npm install tsc --global```
* Typings ```npm install typings --global```

### Installation

* Install global dependencies
* Clone project
* Run `npm install` to install the dependencies.
* Install typings depencency ```tsd install```

### Commands

Watch files and compile TS to JS on changes:
```shell
gulp watch
```
Serve app:
```shell
gulp serve
# or
npm start
```
Deploy app to directory `deploy`:
```shell
gulp deploy
```
Access app:
`localhost:8080`

To restart manual type `rs` and return.

Compile TS and run tests:
```shell
gulp test
# or
npm test
```

Install new type declarations:
```shell
# jasmine example
tsd query jasmine --action install --save
```

### Link Metristic Core if you develop local

1. Clone Metristic Core
2. Create global link `cd Metristic.Core; sudo npm link`.
3. Add `"metristic-core": "^0.2.0",` in project.json of your deployment repository to your dependencies.
4. Run `npm link metristic-core` in your project repository.

Npm will create 2 links: `Metristic/HSR.Metristic.Plugin.General/node_modules/metristic-core -> /usr/lib/node_modules/metristic-core -> Metristic/HSR.Metristic.Core`.

"metristic-core" must match the name in project.json

Sometimes npm is throwing errors about link. In this case create is by your self:
```bash
sudo ln -s ./ /usr/lib/node_modules/metristic-plugin-xyz
ln -s /usr/lib/node_modules/metristic-core ./node_modules/metristic-core
```


## Create your own metristic plugin

1. Create a repository like `HSR.Metristic.Plugin.General`. Don't forget main & typings field in project.json. Otherwise it will not be possible to link JS & TS.
2. If you develop localy, create a global package link: `sudo npm link "metristic-plugin-itsname"`.
3. Add your repository as dependency to Metrisitc project.json. (npm package or github url). Link it if you work localy (`npm link metristic-plugin-itsname`).
4. `npm install`
5. Require and use it.


## Docker image

To build the image install the complete development environment.

### Build

```shell
gulp deploy
docker build -t <organization>/metristic .
```

### Run

```shell
docker run -p 8080:8080 -it --rm --name metristic <organization>/metristic
```
Open `localhost:8080` in your browser.

### Stop container

```shell
docker stop metristic
```

### Manage container

https://nodejs.org/en/docs/guides/nodejs-docker-webapp/


## Various

https://www.airpair.com/typescript/posts/typescript-development-with-gulp-and-sublime-text
