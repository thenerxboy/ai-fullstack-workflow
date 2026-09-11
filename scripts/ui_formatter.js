/**
 * Root Helper Proxy for UI Prompt Formatter
 * Delegating cleanly to 03-ui-skill/scripts/ui_formatter.js
 */

const path = require('path');
const { spawnSync } = require('child_process');

const targetScript = path.join(__dirname, '..', '03-ui-skill', 'scripts', 'ui_formatter.js');
const args = process.argv.slice(2);

const result = spawnSync('node', [targetScript, ...args], { stdio: 'inherit' });
process.exit(result.status || 0);
