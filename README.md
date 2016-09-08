# HSR.Metristic
Node.js based checking and metric web service


## Documentation

* Project documentation: [GitHub Wiki](https://github.com/wasabideveloper/HSR.Metristic/wiki)
* [Open issues](https://github.com/wasabideveloper/HSR.Metristic/issues)
* [Milestones](https://github.com/wasabideveloper/HSR.Metristic/milestones)


## Lisence
![Apache License Version 2.0](https://www.apache.org/img/asf_logo.png)
[Apache License Version 2.0](./LICENSE)


## Releases / Production

⬇ Download on the [Release page](https://github.com/wasabideveloper/HSR.Metristic/releases)

### Installation

* Install node.js
* Extract archive
* Enter the extracted directory, e.g. `Metristic-1.0`.
* Run `npm install --production` to install the dependencies.

### Start

* Run `node dist/app/index.js` to start the application.
* Open `localhost:8080` in your browser.


## Development

### Global dependencies

* Node.js / npm
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
Access app:
`localhost:8080`

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

## Various

https://www.airpair.com/typescript/posts/typescript-development-with-gulp-and-sublime-text
