const os = require("os");
const disk = require("diskusage");

function getCpuUsagePercent() {
    let cpus = os.cpus();
    let totalCpuTime = cpus.reduce((acc, cpu) => {
        return acc + cpu.times.user + cpu.times.nice + cpu.times.sys + cpu.times.idle + cpu.times.irq;
    }, 0);

    let idleCpuTime = cpus.reduce((acc, cpu) => {
        return acc + cpu.times.idle;
    }, 0);

    let cpuUsagePercentage = 100 - (100 * (idleCpuTime / totalCpuTime));

    return cpuUsagePercentage.toFixed(2);
}

function getMemUsagePercent() {
    let totalMemory = os.totalmem();
    let freeMemory = os.freemem();
    let usedMemory = totalMemory - freeMemory;

    let memoryUsagePercentage = (usedMemory / totalMemory) * 100;

    return memoryUsagePercentage.toFixed(2);
}

function getFreeDiskSpace() {
    let path = os.platform() === "win32" ? "c:" : "/";
    let freeDiskSpace = "";

    disk.check(path, function (err, info) {
        freeDiskSpace = "" + info.free;
    });
    return freeDiskSpace;
}

function getTotalDiskSpace() {
    let path = os.platform() === "win32" ? "c:" : "/";
    let totalDiskSpace = "";

    disk.check(path, function (err, info) {
        totalDiskSpace = "" + info.total;
    });
    return totalDiskSpace;
}

module.exports = { getCpuUsagePercent, getMemUsagePercent, getFreeDiskSpace, getTotalDiskSpace };