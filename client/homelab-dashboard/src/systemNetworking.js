const dns = require('dns');

export function resolveIPV4Address(hostname) {
    let ipv4Address = "";
    dns.lookup(hostname, (error, address) => {
        if (error) {
            console.error(`Error resolving host ${hostname}: ${error.message}`);
            return;
        }

        if (address.length === 0) {
            console.error(`No IP addresses found for ${hostname}`);
            return;
        }

        console.log(address);
        ipv4Address = address.toString();
    });
    return ipv4Address;
}