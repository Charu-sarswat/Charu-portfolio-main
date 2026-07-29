const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log("Starting conversion...");
try {
  const out = execSync('python convert_webp.py', { cwd: __dirname, encoding: 'utf-8' });
  console.log("Python output:\n" + out);
} catch (err) {
  console.error("Python exec error:", err.message);
  if (err.stdout) console.log("Stdout:", err.stdout);
  if (err.stderr) console.error("Stderr:", err.stderr);
}
