import Resource from "./Resource";
import * as systemConnector from "./systemConnector";

let cpuUtilizationPercent = systemConnector.getCpuUtilization();
let memUtilizationPercent = systemConnector.getMemoryUtilization();
let freeDiskSpace = systemConnector.getFreeDiskSpace();
let totalDiskSpace = systemConnector.getTotalDiskSpace();

function ResourceUsageBar() {
  console.log(((Number(freeDiskSpace.responseText) + Number.EPSILON) / Number(totalDiskSpace.responseText) * 100).toFixed(2));
    return (
        <div id="resource-usage-bar">
            <Resource 
            imgPath={"#"}
            usageMetric={`${cpuUtilizationPercent.responseText}%`}
            resourceName={"CPU"}
            percent={cpuUtilizationPercent.responseText}
          />
    
          <Resource 
            imgPath={"#"}
            usageMetric={`${memUtilizationPercent.responseText}%`}
            resourceName={"MEM"}
            percent={memUtilizationPercent.responseText}
          />
    
          <Resource 
            imgPath={"#"}
            usageMetric={`${systemConnector.formatBytes(freeDiskSpace.responseText)}`}
            resourceName={"Free"}
            percent={((Number(freeDiskSpace.responseText) + Number.EPSILON) / Number(totalDiskSpace.responseText) * 100).toFixed(2)}
          />
        </div>

    );
}

export default ResourceUsageBar;