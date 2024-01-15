import Service from "./Service";

function ServicesSection() {
    return (
        <div id="services-section">
            <h2>Services</h2>
            <Service 
                imgpath={"#"}
                serviceName={"Proxmox VE"}
                ipAddress={"###.###.###.###"}
                hostName={"proxmox"}
            />
            <Service 
                imgpath={"#"}
                serviceName={"Open Media Vault - NAS"}
                ipAddress={"###.###.###.###"}
                hostName={"omv-nas"}
            />
            <Service 
                imgpath={"#"}
                serviceName={"Supermico IMPI"}
                ipAddress={"###.###.###.###"}
                hostName={"smc-server"}
            />
        </div>
    );
}

export default ServicesSection;