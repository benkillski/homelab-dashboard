import Resource from "./Resource";
import * as systemConnector from "./systemConnector";

function ResourceUsageBar() {
    return (
        <div id="resource-usage-bar">
            <Resource 
            imgPath={"#"}
            usageMetric={`${systemConnector.getCpuUtilization()}%`}
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