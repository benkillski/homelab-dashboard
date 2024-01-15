import Service from "./Service";

function ServicesSection() {
    return (
        <div id="services-section">
            <h2>Services</h2>
            <div id="services-container">
                <Service 
                    serviceURL={"http://###.###.###.###:###"}
                    imgpath={"#"}
                    serviceName={"Proxmox VE"}
                    ipAddress={"###.###.###.###"}
                    hostName={"proxmox"}
                />
                <Service 
                    serviceURL={"http://###.###.###.###:###"}
                    imgpath={"#"}
                    serviceName={"Open Media Vault - NAS"}
                    ipAddress={"###.###.###.###"}
                    hostName={"omv-nas"}
                />
                <Service 
                    serviceURL={"http://###.###.###.###:###"}
                    imgpath={"#"}
                    serviceName={"Supermico IMPI"}
                    ipAddress={"###.###.###.###"}
                    hostName={"smc-server"}
                />
            </div>
        </div>
    );
}

export default ServicesSection;