"use strict";

const fs = require('fs');
const path = require('path');
const pkg = require('./package.json');
const symbols = require("log-symbols");

const black   = '\u001b[30m';
const red     = '\u001b[31m';
const green   = '\u001b[32m';
const yellow  = '\u001b[33m';
const blue    = '\u001b[34m';
const magenta = '\u001b[35m';
const cyan    = '\u001b[36m';
const white   = '\u001b[37m';

const reset   = '\u001b[0m';

// const commitMessagePath = path.join(pkg._where, process.argv.slice(3)[0]);

const commitMessage = fs.readFileSync(process.env.HUSKY_GIT_PARAMS).toString();

// console.log();
// console.log(symbols['info'], yellow + 'process.env.HUSKY_GIT_PARAMS: ' + process.env.HUSKY_GIT_PARAMS + reset);
// console.log(symbols['info'], yellow + 'commitMessage: ' + commitMessage + reset);
// console.log();

const checkVietnamese = function (str) {
  return str.match(/[àáảãạằắẳẵặầấẩẫậìíỉĩịỳýỷỹỵùúủũụừứửữựèéẻẽẹềếểễệòóỏõọồốổỗộờớởỡợ]/i);
};

module.exports.checkVietnamese = checkVietnamese;

if (checkVietnamese(commitMessage)) {
  console.error('\n  ' + symbols['error'], magenta + ' Can not use "Vietnamese" for commit message.\n' + reset);
  process.exit(1);
}
