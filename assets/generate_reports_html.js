const report = require('multiple-cucumber-html-reporter');
const path = require('path');
//const projectName = path.basename(__dirname);
const projectName = process.env.BROWSERSTACK_PROJECT_NAME;
const projectVersion = process.env.npm_package_version;
const reportGenerationTime = (new Date()).toISOString();

report.generate({
    reportName: 'Toyota Mainsite - Report',
    jsonDir: 'reports',
    reportPath: 'reports',
    //openReportInBrowser: true,
    openReportInBrowser: true,
    disableLog: true,
    displayDuration: true,
    durationInMS: true,
    metadata:{
        browser: {
            name: 'chrome',
            version: '72'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '10'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: `${projectName}`},
            {label: 'Release', value: `${projectVersion}`},
            {label: 'Report Generation Time', value: `${reportGenerationTime}`},
            
        ]
    }
});