const express = require("express");
const router = express.Router();
const systemMetrics = require("../systemMetrics");
const fs = require("fs");
const jsyaml = require("js-yaml");

router.get('/cpuUsage', (req, res) => {
  res.send(systemMetrics.getCpuUsagePercent());
});

router.get('/memUsage', (req, res) => {
  res.send(systemMetrics.getMemUsagePercent());
});

router.get('/freeDiskSpace', (req, res) => {
  res.send(systemMetrics.getFreeDiskSpace());
});

router.get('/totalDiskSpace', (req, res) => {
  res.send(systemMetrics.getTotalDiskSpace());
});

try {
  const rawConfig = fs.readFileSync("config/config.services.yaml");
  const servicesConfig = jsyaml.load(rawConfig);
  router.get('/servicesConfig', (req, res) => {
    res.send(servicesConfig);
  });
} 
catch (error) {
  console.error("Error loading configuration", error.message);
}

module.exports = router;