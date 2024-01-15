function Resource ({ imgPath, usage, resourceName }) {
    return (
        <div className="resource-usage-container">
          <div className="resource-img-container">
            <img src={imgPath} />
          </div>
          <div className="resource-stats=container">
            <div className="resource-stats">
              <span>{usage}</span>
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