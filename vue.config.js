const fs = require('fs')
module.exports = {
    devServer: {
        host: 'localhost',
        // public: 'https://192.168.1.8:8080',
        disableHostCheck: true,
        https: {
            key: fs.readFileSync('./certs/dev_localhost.key'),
            cert: fs.readFileSync('./certs/dev_localhost.pem'),
        },
    },
}