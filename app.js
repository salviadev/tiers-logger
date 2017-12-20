"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const util = require("util");
const fs = require("fs");
const path = require("path");
let app = express();
app.all('*/tiers/log', (req, res) => {
    let date = new Date();
    fs.mkdir('logs', null, (err) => {
        if (!err || err.code === 'EEXIST') {
            const fileName = util.format('%s-%d-%s-%s-%s-%s-%s.json', req.method, date.getUTCFullYear(), ((date.getUTCMonth() + 1) + '').padStart(2, '0'), (date.getUTCDate() + '').padStart(2, '0'), (date.getUTCHours() + '').padStart(2, '0'), (date.getUTCMinutes() + '').padStart(2, '0'), (date.getUTCMilliseconds() + '').padStart(3, '0'));
            const stream = fs.createWriteStream(path.join('logs', fileName));
            req.pipe(stream);
        }
    });
    res.status(200).json({ response: 'I am alive!' });
});
const port = process.env.PORT || 8888;
app.listen(port, function () {
    console.log(util.format('Server started at port %d.', port));
});
