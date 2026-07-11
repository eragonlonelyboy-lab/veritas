#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const assert = require('assert');

const skill = fs.readFileSync(path.join(__dirname, '..', 'SKILL.md'), 'utf8');
const report = fs.readFileSync(path.join(__dirname, '..', 'references', 'agent-neutral-report.md'), 'utf8');
for (const field of ['work id', 'provider/model/session', 'independence class', 'Files changed', 'Proof rerun', 'exit code', 'Deviations and disagreements', 'Next action']) {
  assert(report.includes(field), `missing report field: ${field}`);
}
assert(/zero session context|no transcript/.test(skill + report));
assert(/uncertainty/.test(report));
assert(!/[\u2014\u2013]/.test(report), 'report template contains banned dash');
console.log('VERITAS agent-neutral report benchmark: 11/11 checks pass');
