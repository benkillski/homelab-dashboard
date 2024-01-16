import Resource from "./Resource";
import * as systemConnector from "./systemConnector";

let cpuUtilizationPercent = systemConnector.getCpuUtilization();

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
            usageMetric={"13%"}
            resourceName={"MEM"}
          />
    
          <Resource 
            imgPath={"#"}
            usageMetric={"20GB"}
            resourceName={"Free"}
          />
        </div>

    );
}

export default ResourceUsageBar;