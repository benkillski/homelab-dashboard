function Resource ({ imgPath, usageMetric, resourceName }) {
    return (
        <div className="resource-usage-container">
          <div className="resource-img-container">
            <img src={imgPath} />
          </div>
          <div className="resource-stats=container">
            <div className="resource-stats">
              <span>{usageMetric}</span>
              <span>{resourceName}</span>
            </div>
            <div>
            ==================
            </div>
          </div>
        </div>
    );
}

export default Resource;