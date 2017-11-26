"use strict";

const fs = require('fs');
const pkg = require('./package.json');
const symbols = require("log-symbols");
const commitMessage = fs.readFileSync( pkg._where + '/' + process.argv.slice(3)[0] ).toString();

const checkVietnamese = function (extension) {
  return extension.match(/[àáảãạằắẳẵặầấẩẫậìíỉĩịỳýỷỹỵùúủũụừứửữựèéẻẽẹềếểễệòóỏõọồốổỗộờớởỡợ]/i);
};

module.exports.checkVietnamese = checkVietnamese;

if (checkVietnamese(commitMessage)) {
  console.error('  ' + symbols['error'], ' Can not use Vietnamese for commit message.');
  process.exit(1);
}
