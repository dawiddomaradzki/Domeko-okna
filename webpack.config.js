const path = require('path');

module.exports = {
    webpackConfig: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src/'),
            },
        },
    },
};
