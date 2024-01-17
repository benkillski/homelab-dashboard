import React from "react";

function Service( {serviceURL, imgPath, altText, serviceName, ipAddress, hostName} ) {
    return (
      <a id="service-container" href={serviceURL} target="blank">
          <span><img src={imgPath} alt={altText} /></span>
          <div>
            <h3>{serviceName}</h3>
            <p>{ipAddress} | {hostName}</p>
          </div>
      </a>
    );
}

export default Service;