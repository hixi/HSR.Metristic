var StructureMetric = require("../check-plugins/structure-metric/structure-metric").StructureMetric;
var HtmlW3cValidator = require("../check-plugins/html-w3c-validator/html-w3c-validator").HtmlW3cValidator;
var HtmlMetric = require("../check-plugins/html-metric/html-metric").HtmlMetric;
var CssMetric = require("../check-plugins/css-metric/css-metric").CssMetric;
var JsStyleCheck = require("../check-plugins/js-style-check/js-style-check").JsStyleCheck;
var RegexCheck = require("../check-plugins/regex-check/regex-check").RegexCheck;
var rules = require("../check-plugins/regex-check/default-rules").rules;


module.exports = {
	general: {
		name: 'General project',
		description: 'Check file structure',
		checks: [StructureMetric],
		options: {}
	},
	webMetrics: {
		name: 'Web project metrics',
		description: 'Show metrics of HTML, CSS',
		checks: [StructureMetric, HtmlMetric, CssMetric],
		options: {}
	},
	webCheck: {
		name: 'Web project checking',
		description: 'Validate HTML by W3C, check JS code style and check for Selector and unit usage in CSS.',
		checks: [StructureMetric, HtmlW3cValidator, JsStyleCheck, RegexCheck],
		options: {
			RegexCheck: {
				rules: [
					rules.HTML.bookmarkIconUsage,
					rules.HTML.unexpectedElementsUsage,
					rules.CSS.efficientSelectorsUsage,
					rules.CSS.unitsUsage,
					rules.JS.codeEvaluationUsage
				]
			}
		}
	},
	WED1Testation: {
		name: "WED1 Testation check",
		description: "Check HTML, CSS and JS according to WED1 testation1 rules.",
		checks: [StructureMetric, HtmlW3cValidator, JsStyleCheck, RegexCheck],
		options: {
			RegexCheck: {
				rules: [
					rules.HTML.bookmarkIconUsage,
					rules.HTML.styleSheetUsage,
					rules.HTML.hreflangAttribute,
					rules.HTML.timeElementUsage,
					rules.HTML.unexpectedElementsUsage,
					rules.HTML.requiredElements,
					rules.HTML.requiredFormElements,
					rules.HTML.rolesUsage,
					rules.HTML.articleUsage,
					rules.HTML.completeArticleUsage,
					rules.HTML.svgObjectUsage,
					rules.HTML.figureUsage,

					rules.CSS.floatUsage,
					rules.CSS.stateEffectUsage,
					rules.CSS.headingNumbersUsage,
					rules.CSS.efficientSelectorsUsage,
					rules.CSS.unitsUsage,
					rules.CSS.nthChildUsage,
					rules.CSS.calcUsage,

					rules.JS.codeEvaluationUsage
				]
			}
		}
	},
	All: {
		name: "Everything",
		description: "Run all metrics and checks",
		checks: [StructureMetric, HtmlMetric, CssMetric, HtmlW3cValidator, JsStyleCheck, RegexCheck],
		options: {
			RegexCheck: {
				rules: [
					rules.HTML.bookmarkIconUsage,
					rules.HTML.unexpectedElementsUsage,
					rules.CSS.efficientSelectorsUsage,
					rules.CSS.unitsUsage,
					rules.JS.codeEvaluationUsage
				]
			}
		}
	}
};