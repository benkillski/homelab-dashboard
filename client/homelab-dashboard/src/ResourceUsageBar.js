import Resource from "./Resource";
import * as systemConnector from "./systemConnector";

let cpuUtilizationPercent = systemConnector.getCpuUtilization();
let memUtilizationPercent = systemConnector.getMemoryUtilization();
let freeDiskSpace = systemConnector.getFreeDiskSpace();

function ResourceUsageBar() {
    return (
        <div id="resource-usage-bar">
            <Resource 
            imgPath={"#"}
            usageMetric={`${cpuUtilizationPercent.responseText}%`}
            resourceName={"CPU"}
          />
    
          <Resource 
            imgPath={"#"}
            usageMetric={`${memUtilizationPercent.responseText}%`}
            resourceName={"MEM"}
          />
    
          <Resource 
            imgPath={"#"}
            usageMetric={`${freeDiskSpace.responseText}`}
            resourceName={"Free"}
          />
        </div>

    );
}

export default ResourceUsageBar;