var StructureMetric = require("../check-plugins/structure-metric/structure-metric").StructureMetric;
var HtmlW3cValidator = require("../check-plugins/html-w3c-validator/html-w3c-validator").HtmlW3cValidator;
var HtmlMetric = require("../check-plugins/html-metric/html-metric").HtmlMetric;


module.exports = {
	general: {
		name: 'General project',
		description: 'Check file structure',
		checks: [StructureMetric]
	},
	web: {
		name: 'General web project',
		description: 'Check HTML, CSS and JS',
		checks: [StructureMetric, HtmlW3cValidator, HtmlMetric],
		options: {}
	}
};