const express = require("express");
const router = express.Router();
const os = require("os");

router.get('/cpuUsage', (req, res) => {
  res.send(getCpuUsagePercent());
});

router.get('/memUsage', (req, res) => {
  res.send(getMemUsagePercent());
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

module.exports = router;