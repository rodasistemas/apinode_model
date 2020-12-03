"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; };
require('dotenv/config.js');

var _appjs = require('./app.js'); var _appjs2 = _interopRequireDefault(_appjs);

_appjs2.default.listen(process.env.PORT, () => {
    console.log(` Backend run in ${process.env.PORT}`);
});
