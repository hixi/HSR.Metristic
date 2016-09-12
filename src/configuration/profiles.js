var StructureMetric = require("../check-plugins/structure-metric/structure-metric").StructureMetric;
var HtmlW3cValidator = require("../check-plugins/html-w3c-validator/html-w3c-validator").HtmlW3cValidator;
var HtmlMetric = require("../check-plugins/html-metric/html-metric").HtmlMetric;
var CssMetric = require("../check-plugins/css-metric/css-metric").CssMetric;
var JsStyleCheck = require("../check-plugins/js-style-check/js-style-check").JsStyleCheck;
var RegexCheck = require("../check-plugins/regex-check/regex-check").RegexCheck;


module.exports = {
	general: {
		name: 'General project',
		description: 'Check file structure',
		checks: [StructureMetric],
		options: {}
	},
	webMetrics: {
		name: 'Web project metrics',
		description: 'Show metrics of HTML, CSS and JS',
		checks: [StructureMetric, HtmlMetric, CssMetric],
		options: {}
	},
	webCheck: {
		name: 'Web project checking',
		description: 'Show metrics of HTML, CSS and JS and check JS code style and check by custom rules.',
		checks: [StructureMetric, HtmlMetric, CssMetric, JsStyleCheck, RegexCheck],
		options: {}
	},
	webCheckAdvanced: {
		name: 'Extensive web project checking',
		description: 'Show metrics of HTML, CSS and JS and check JS code style and check by custom rules and validate html by W3C',
		checks: [StructureMetric, HtmlMetric, CssMetric, JsStyleCheck, RegexCheck, HtmlW3cValidator],
		options: {}
	}
};