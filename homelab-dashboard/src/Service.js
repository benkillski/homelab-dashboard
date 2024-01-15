function Service( {imgPath, serviceName, ipAddress, hostName} ) {
    return (
      <a id="service-container" href="#">
          <span><img src={imgPath}></img></span>
          <div>
            <h3>{serviceName}</h3>
            <p>{ipAddress} | {hostName}</p>
          </div>
      </a>
    );
}

export default Service;