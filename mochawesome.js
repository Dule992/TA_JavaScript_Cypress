const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

const setupHooks = (on) => {
    on('before:run', async (details) => {
        await beforeRunHook(details);
    });
    on('after:run', async (details) => {
        await afterRunHook(details);
    });
};

module.exports = { setupHooks };
