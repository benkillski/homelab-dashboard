const express = require("express");
const router = express.Router();
const os = require("os");
const disk = require("diskusage");

router.get('/cpuUsage', (req, res) => {
  res.send(getCpuUsagePercent());
});

router.get('/memUsage', (req, res) => {
  res.send(getMemUsagePercent());
});

router.get('/freeDiskSpace', (req, res) => {
  res.send(getFreeDiskSpace());
});

router.get('/totalDiskSpace', (req, res) => {
  res.send(getTotalDiskSpace());
});

function getCpuUsagePercent() {
  const cpus = os.cpus();
  const totalCpuTime = cpus.reduce((acc, cpu) => {
    return acc + cpu.times.user + cpu.times.nice + cpu.times.sys + cpu.times.idle + cpu.times.irq;
  }, 0);

  const idleCpuTime = cpus.reduce((acc, cpu) => {
    return acc + cpu.times.idle;
  }, 0);

  const cpuUsagePercentage = 100 - (100 * (idleCpuTime / totalCpuTime));

  return cpuUsagePercentage.toFixed(2);
}

function getMemUsagePercent() {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = totalMemory - freeMemory;

  const memoryUsagePercentage = (usedMemory / totalMemory) * 100;

  return memoryUsagePercentage.toFixed(2);
}

function getFreeDiskSpace() {
  let path = os.platform() === "win32" ? "c:" : "/";
  let freeDiskSpace = "";

  disk.check(path, function(err, info) {
    freeDiskSpace = "" + info.free;
  });
  return freeDiskSpace;
}

function getTotalDiskSpace() {
  let path = os.platform() === "win32" ? "c:" : "/";
  let totalDiskSpace = "";

  disk.check(path, function(err, info) {
    totalDiskSpace = "" + info.total;
  });
  return totalDiskSpace;
}

module.exports = router;