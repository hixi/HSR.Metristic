var StructureMetric = require("../check-plugins/structure-metric/structure-metric").StructureMetric;
var HtmlW3cValidator = require("../check-plugins/html-w3c-validator/html-w3c-validator").HtmlW3cValidator;
var HtmlMetric = require("../check-plugins/html-metric/html-metric").HtmlMetric;
var CssMetric = require("../check-plugins/css-metric/css-metric").CssMetric;
var JsStyleCheck = require("../check-plugins/js-style-check/js-style-check").JsStyleCheck;


module.exports = {
	general: {
		name: 'General project',
		description: 'Check file structure',
		checks: [StructureMetric]
	},
	webMetrics: {
		name: 'Web project metrics',
		description: 'Show metrics of HTML, CSS and JS',
		checks: [StructureMetric, HtmlMetric, CssMetric, JsStyleCheck],
		options: {}
	},
	webCheck: {
		name: 'Web project checking',
		description: 'Check HTML, CSS and JS',
		checks: [StructureMetric, HtmlMetric, CssMetric, JsStyleCheck, HtmlW3cValidator],
		options: {}
	}
};