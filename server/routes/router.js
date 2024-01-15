const express = require("express");
const router = express.Router();
const os = require("os");

router.get('/cpuUsage', (req, res) => {
    res.send(getCpuUsagePercent());
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

  module.exports = router;