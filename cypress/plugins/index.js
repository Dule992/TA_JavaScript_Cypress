const { merge } = require('mochawesome-merge');
const generator = require('mochawesome-report-generator');
const logToOutput = require('cypress-log-to-output');

module.exports = (on, config) => {
    on('after:run', async (results) => {
        if (results) {
            try {
                console.log('after:run event handler started');
                const jsonReport = await merge({
                    files: ['./runner-results/*.json'],
                });
                console.log('JSON report merged:', jsonReport);
                await generator.create(jsonReport, {
                    reportDir: 'cypress/reports',
                });
                console.log('Report generated successfully');
            } catch (error) {
                console.error('Error in after:run event handler:', error);
            }
        }
    });

    // Other event listeners or plugin logic can go here
    logToOutput.install(on);
    return config;
};
