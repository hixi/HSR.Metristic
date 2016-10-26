import {Application} from "metristic-core";
import {Profile} from "metristic-core";

let profiles: { [name: string]: Profile } = require("../configuration/profiles");
let appConfig: { [name: string]: any } = require("../configuration/app");


let app = new Application(profiles, appConfig);
app.start();
