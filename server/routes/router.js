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
    console.log(formatBytes(info.free));
    freeDiskSpace = formatBytes(info.free);
  });
  return freeDiskSpace;
}

function formatBytes(bytes, decimals = 2) {
  if (!+bytes) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

module.exports = router;