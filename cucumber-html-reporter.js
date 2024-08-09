const report = require('multiple-cucumber-html-reporter');

var month = (new Date).getMonth() + 1;
var os = require('os');
const platform = os.platform();
const release = os.release();
const hostnameofpc = os.hostname


report.generate({
	jsonDir: './jsonlogs/',
	reportPath: './jsonlogs/',
	pageTitle: 'Airalo TA report',
	reportName: 'Airalo TA report Test Execution Report ' + (new Date).getDate() + '/' + month + '/' + (new Date).getFullYear(),
	metadata: {
		browser: {
			name: 'chrome'
		},
		device: hostnameofpc,
		platform: {
			name: platform,
			version: release,
		},
	},

});
