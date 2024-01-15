const express = require("express");
const app = express();
const port = 3001;
const os = require("os");

// CORS setup (for development purposes, adjust as needed for production)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/cpuUsage', (req, res) => {
  res.json(getCpuUsagePercent());
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
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