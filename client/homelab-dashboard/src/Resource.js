import React from "react";

function Resource ({ imgPath, altText, usageMetric, resourceName, percent }) {
    return (
        <div className="resource-usage-container">
          <div className="resource-img-container">
            <img src={imgPath} alt={altText} />
          </div>
          <div className="resource-stats=container">
            <div className="resource-stats">
              <span>{usageMetric}</span>
              <span>{resourceName}</span>
            </div>
            <div>
              <progress value={percent} max="100">{percent}%</progress>
            </div>
          </div>
        </div>
    );
}

export default Resource;