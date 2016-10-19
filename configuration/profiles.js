var StructureMetric = require("metristic-plugin-general").StructureMetric;
var RegexCheck = require("metristic-plugin-general").RegexCheck;
var rules = require("metristic-plugin-general").rules;

var HtmlW3cValidator = require("metristic-plugin-web").HtmlW3cValidator;
var HtmlMetric = require("metristic-plugin-web").HtmlMetric;
var CssMetric = require("metristic-plugin-web").CssMetric;
var JsStyleCheck = require("metristic-plugin-web").JsStyleCheck;
var PageVisualizer = require("metristic-plugin-web").PageVisualizer;


module.exports = {
	"general": {
		name: 'General project',
		description: 'Check file structure',
		checks: [StructureMetric],
		options: {}
	},
	"webMetrics": {
		name: 'Web project metrics',
		description: 'Show metrics of HTML, CSS',
		checks: [StructureMetric, HtmlMetric, CssMetric],
		options: {}
	},
	"webCheck": {
		name: 'Web project checking',
		description: 'Validate HTML by W3C, check JS code style, run JS tests (test.html or SpecRunner.html) and' +
		' check for Selector and unit usage in CSS.',
		checks: [StructureMetric, HtmlW3cValidator, JsStyleCheck, RegexCheck, PageVisualizer],
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
	"WED1Testation": {
		name: "WED1 Testation check",
		description: "Check HTML, CSS and JS according to WED1 testation1 rules.",
		checks: [StructureMetric, HtmlW3cValidator, JsStyleCheck, RegexCheck, PageVisualizer],
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
	"All": {
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
