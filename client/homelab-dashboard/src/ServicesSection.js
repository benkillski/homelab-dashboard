import React from "react";
import Service from "./Service";
import * as systemNetworking from "./systemNetworking";

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
                    ipAddress={systemNetworking.resolveIPV4Address("nas-omv.lan")}
                    hostName={"pve"}
                />
                <Service 
                    serviceURL={"http://nas-omv"}
                    imgPath={"#"}
                    altText={"#"}
                    serviceName={"Open Media Vault - NAS"}
                    ipAddress={systemNetworking.resolveIPV4Address("google.com")}
                    hostName={"nas-omv"}
                />
                <Service 
                    serviceURL={"http://###.###.###.###:###"}
                    imgPath={"#"}
                    altText={"#"}
                    serviceName={"Supermico IMPI"}
                    ipAddress={systemNetworking.resolveIPV4Address("SMC-X8SIL-F")}
                    hostName={"SMC-X8SIL-F"}
                />
            </div>
        </div>
    );
}

export default ServicesSection;