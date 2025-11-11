const fs = require('fs');
const path = require('path');

/**
 * Renames the wdio.log file to a custom name with date and time.
 * @param {string} logDir - The directory where the log file is located.
 */
function renameWdioLog(logDir) {
    const wdioLog = path.join(logDir, 'wdio.log');
    if (fs.existsSync(wdioLog)) {
        const now = new Date();
        const dd = String(now.getDate()).padStart(2, '0');
        const MM = String(now.getMonth() + 1).padStart(2, '0');
        const aaaa = now.getFullYear();
        const hh = String(now.getHours()).padStart(2, '0');
        const mm = String(now.getMinutes()).padStart(2, '0');
        const newName = `log-execucao-${dd}-${MM}-${aaaa}-${hh}-${mm}.txt`;
        const newPath = path.join(logDir, newName);
        fs.renameSync(wdioLog, newPath);
    }
}

module.exports = {
    renameWdioLog
};