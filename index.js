"use strict";

const fs = require('fs');
const path = require('path');
const pkg = require('./package.json');
const symbols = require("log-symbols");

const commitMessagePath = path.join(pkg._where, process.argv.slice(3)[0]);
const commitMessage = fs.readFileSync(commitMessagePath).toString();

const checkVietnamese = function (str) {
  return str.match(/[àáảãạằắẳẵặầấẩẫậìíỉĩịỳýỷỹỵùúủũụừứửữựèéẻẽẹềếểễệòóỏõọồốổỗộờớởỡợ]/i);
};

module.exports.checkVietnamese = checkVietnamese;

if (checkVietnamese(commitMessage)) {
  console.error('  ' + symbols['error'], ' Can not use Vietnamese for commit message.');
  process.exit(1);
}
