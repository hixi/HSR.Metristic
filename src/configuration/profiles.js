var StructureMetric = require("../check-plugins/structure-metric/structure-metric").StructureMetric;


module.exports = {
	general: {
		name: 'General project',
		description: 'Check file structure',
		checks: [StructureMetric]
	},
	web: {
		name: 'General web project',
		description: 'Check HTML, CSS and JS',
		checks: [StructureMetric]
	}
};