# HSR.Metristic
Node.js based checking and metric web service


## Documentation (Wiki)
https://github.com/wasabideveloper/HSR.Metristic/wiki


## Lisence
![Apache License Version 2.0](https://www.apache.org/img/asf_logo.png)
[Apache License Version 2.0](./LICENSE)


## Production

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


## Various

https://www.airpair.com/typescript/posts/typescript-development-with-gulp-and-sublime-text
