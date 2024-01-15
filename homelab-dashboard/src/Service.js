function Service( {imgPath, serviceName, ipAddress, hostName} ) {
    return (
      <a id="services-container" href="#">
          <div className="service-container">
            <span><img src={imgPath}></img></span>
            <div>
              <h3>{serviceName}</h3>
              <p>{ipAddress} | {hostName}</p>
            </div>
          </div>
      </a>
    );
}

export default Service;