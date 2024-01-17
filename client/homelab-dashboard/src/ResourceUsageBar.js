import React, { useState, useEffect} from "react";
import Resource from "./Resource";
import * as systemConnector from "./systemConnector";

function ResourceUsageBar() {
  const [cpuUtilizationPercent, setCpuUtilizationPercent] = useState("");
  const [memUtilizationPercent, setMemUtilizationPercent] = useState("");
  const [freeDiskSpace, setFreeDiskSpace] = useState("");
  const [totalDiskSpace, setTotalDiskSpace] = useState("");

  useEffect(() => {
    // Function to be executed every second
    const updateSystemInfo = () => {
      
      systemConnector.getCpuUtilization((error, result) => {
        if(error) {
          console.error(error);
        }
        else {
          setCpuUtilizationPercent(result);
        }
      });

      systemConnector.getMemoryUtilization((error, result) => {
        if(error) {
          console.error(error);
        }
        else {
          setMemUtilizationPercent(result);
        }
      });

      systemConnector.getFreeDiskSpace((error, result) => {
        if(error) {
          console.error(error);
        }
        else {
          setFreeDiskSpace(result);
        }
      });

      systemConnector.getTotalDiskSpace((error, result) => {
        if(error) {
          console.error(error);
        }
        else {
          setTotalDiskSpace(result);
        }
      });
    };

    // Set up the interval
    const intervalId = setInterval(updateSystemInfo, 1000); // 1000 milliseconds = 1 second

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that the effect runs only once
  
  return (
    <div id="resource-usage-bar">
        <Resource 
        imgPath={"#"}
        usageMetric={`${cpuUtilizationPercent}%`}
        resourceName={"CPU"}
        percent={cpuUtilizationPercent}
      />

      <Resource 
        imgPath={"#"}
        usageMetric={`${memUtilizationPercent}%`}
        resourceName={"MEM"}
        percent={memUtilizationPercent}
      />

      <Resource 
        imgPath={"#"}
        usageMetric={`${systemConnector.formatBytes(freeDiskSpace)}`}
        resourceName={"Free"}
        percent={(Number(freeDiskSpace) / Number(totalDiskSpace) * 100).toFixed(2)}
      />
    </div>

  );
}

export default ResourceUsageBar;