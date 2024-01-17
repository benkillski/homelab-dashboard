import React from "react";
import Service from "./Service";

function ServicesSection() {
    return (
        <div id="services-section">
            <h2>Services</h2>
            <div id="services-container">
                <Service 
                    serviceURL={"http://###.###.###.###:###"}
                    imgPath={"#"}
                    altText={"#"}
                    serviceName={"Proxmox VE"}
                    ipAddress={""}
                    hostName={"pve"}
                />
                <Service 
                    serviceURL={"http://nas-omv"}
                    imgPath={"#"}
                    altText={"#"}
                    serviceName={"Open Media Vault - NAS"}
                    ipAddress={""}
                    hostName={"nas-omv"}
                />
                <Service 
                    serviceURL={"http://###.###.###.###:###"}
                    imgPath={"#"}
                    altText={"#"}
                    serviceName={"Supermico IMPI"}
                    ipAddress={""}
                    hostName={"SMC-X8SIL-F"}
                />
            </div>
        </div>
    );
}

export default ServicesSection;