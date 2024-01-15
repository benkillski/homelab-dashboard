import $ from "jquery";

export function getCpuUtilization() {
    return $.ajax({
        url: "http://localhost:3001/cpuUsage",
        success: function (result) {
            const cpuUtilizationPercent = JSON.stringify(result);
            console.log(cpuUtilizationPercent);
            return cpuUtilizationPercent;
        },
        error: function() {
            console.log("Error");
            return;
        }

    });
}

export function getMemoryUsage() {

}

export function getFreeDiskSpace() {

}