import $ from "jquery";

export function getCpuUtilization() {
    return $.get('http://localhost:3001/cpuUsage', {}, function (responseText) {
        return responseText;
    });
}

export function getMemoryUsage() {
    
}

export function getFreeDiskSpace() {

}