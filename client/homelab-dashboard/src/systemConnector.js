import $ from "jquery";

export function getCpuUtilization() {
    return $.ajax({
        url: "http://localhost:3001/cpuUsage",
        success: function (result) {
            console.log(result);
            return JSON.stringify(result);
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