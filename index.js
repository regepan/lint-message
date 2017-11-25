"use strict";

const symbols = require("log-symbols");

require('fs').readFileSync( process.env.GIT_PARAMS );

process.exit(1);
