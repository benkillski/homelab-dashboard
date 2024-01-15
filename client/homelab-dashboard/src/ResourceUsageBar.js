import Resource from "./Resource";

function ResourceUsageBar() {
    return (

        <div id="resource-usage-bar">
            <Resource 
            imgPath={"#"}
            usageMetric={"2%"}
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