#!/usr/bin/env node

const path = require('path');
const matchersPath = path.join(__dirname, '.github');

console.log(`::add-matcher::${path.join(matchersPath, 'pylint-warning-problem-matcher.json')}`);
console.log(`::add-matcher::${path.join(matchersPath, 'pylint-error-problem-matcher.json')}`);
