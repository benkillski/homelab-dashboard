import $ from "jquery";

export function getCpuUtilization() {
    return $.get('http://localhost:3001/cpuUsage', {}, function (responseText) {
        return responseText;
    });
}

export function getMemoryUtilization() {
    return $.get('http://localhost:3001/memUsage', {}, function (responseText) {
        return responseText;
    });
}

export function getFreeDiskSpace() {
    return $.get('http://localhost:3001/freeDiskSpace', {}, function (responseText) {
        return responseText;
    });
}