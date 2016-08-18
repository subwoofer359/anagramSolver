var sysInfo = require('../utils/sys-info');

exports.info = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-cache, no-store');
    console.log(req.url.slice(6));
    res.end(JSON.stringify(sysInfo[req.url.slice(6)]()));  
};