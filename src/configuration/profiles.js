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
		checks: [StructureMetric]
	},
	webMetrics: {
		name: 'Web project metrics',
		description: 'Show metrics of HTML, CSS and JS',
		checks: [StructureMetric, HtmlMetric, CssMetric],
		options: {}
	},
	webCheck: {
		name: 'Web project checking',
		description: 'Show metrics of HTML, CSS and JS and check JS code style and check by custom patterns.',
		checks: [StructureMetric, HtmlMetric, CssMetric, JsStyleCheck, RegexCheck],
		options: {}
	},
	webCheckAdvanced: {
		name: 'Extensive web project check',
		description: 'Show metrics of HTML, CSS and JS and check JS code style and check by custom patterns and validate html by W3C',
		checks: [StructureMetric, HtmlMetric, CssMetric, JsStyleCheck, RegexCheck, HtmlW3cValidator],
		options: {}
	},
	WED1Testation: {
		name: "WED1 Testation check",
		description: "Check HTML, CSS and JS of WED1 testation.",
		checks: /*[StructureMetric, HtmlMetric, CssMetric, JsStyleCheck,*/ [RegexCheck],
		options: {
			RegexCheck: {
				rules: [
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
					rules.CSS.unitsUsage
				]
			}
		}
	}
};