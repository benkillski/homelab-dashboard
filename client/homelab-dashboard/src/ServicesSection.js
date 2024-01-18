import React, {useEffect, useState} from "react";
import Service from "./Service";
import * as config from "./config"

function ServicesSection() {
    const [servicesConfig, setServiceConfig] = useState([]);

    useEffect(() => {
          
          config.servicesConfigLoader((error, result) => {
            if(error) {
              console.error(error);
            }
            else {
              setServiceConfig(result.services);
            }
          });
      }, []); // Empty dependency array ensures that the effect runs only once

      Object.values(servicesConfig).forEach(service => {
        console.log(service);
      });

    return (
        <div id="services-section">
            <h2>Services</h2>
            <div id="services-container">
                {Object.values(servicesConfig).map((service) => (
                    <Service 
                        key={service.hostName}
                        serviceURL={`http://${service.ipv4Address}:${service.port}`}
                        imgPath={service.logoPath}
                        altText={service.serviceName}
                        serviceName={service.serviceName}
                        ipAddress={service.ipv4Address}
                        hostName={service.hostName}
                    />
                ))}
            </div>
        </div>
    );
}

export default ServicesSection;