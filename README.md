# HSR.Metristic
Node.js based checking and metric web service


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

Compile TS and run tests:
```shell
gulp test
# or
npm test
```

Install typings depencency:
```shell
# jasmine example
tsd query jasmine --action install --save
```

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