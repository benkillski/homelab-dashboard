import './App.css';

function App() {
  return (
    <div id="main-container">
      <div id="resource-usage-bar">

        <div className="resource-usage-container">
          <div className="resource-img-container">
            <img src="images/cpu-icon.png"></img>
          </div>
          <div className="resource-stats=container">
            <div className="resource-stats">
              <span>1%</span>
              <span>CPU</span>
            </div>
            <div>
            ==================
            </div>
          </div>
        </div>

        <div className="resource-usage-container">
          <div className="resource-img-container">
            <img src="images/cpu-icon.png"></img>
          </div>
          <div className="resource-stats=container">
            <div className="resource-stats">
              <span>1%</span>
              <span>MEM</span>
            </div>
            <div>
            ==================
            </div>
          </div>
        </div>

        <div className="resource-usage-container">
          <div className="resource-img-container">
            <img src="images/cpu-icon.png"></img>
          </div>
          <div className="resource-stats=container">
            <div className="resource-stats">
              <span>20GB</span>
              <span>Free</span>
            </div>
            <div>
            ==================
            </div>
          </div>
        </div>

      </div>
      <div id="services-section">
        <h2>Services</h2>
        <div id="services-container">
          <div className="service-container">
            <div>
              <span><img></img></span>
              <span>Proxmox VE</span>
              <span>IP_ADDRESS / HOSTNAME</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
