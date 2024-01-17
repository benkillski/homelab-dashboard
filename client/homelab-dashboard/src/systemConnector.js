import $ from "jquery";

export function getCpuUtilization(callback) {
    $.ajax({
        url: "http://localhost:3001/cpuUsage",
        method: "GET",
        success: function (data) {
            callback(null , data.toString());
        },
        error: function (xhr, status, error) {
            callback(`Error: ${status} - ${error}`);
        }
    });
}

export function getMemoryUtilization(callback) {
    $.ajax({
        url: "http://localhost:3001/memUsage",
        method: "GET",
        success: function (data) {
            callback(null , data.toString());
        },
        error: function (xhr, status, error) {
            callback(`Error: ${status} - ${error}`);
        }
    });
}

export function getFreeDiskSpace(callback) {
    $.ajax({
        url: "http://localhost:3001/freeDiskSpace",
        method: "GET",
        success: function (data) {
            callback(null , data.toString());
        },
        error: function (xhr, status, error) {
            callback(`Error: ${status} - ${error}`);
        }
    });
}

export function getTotalDiskSpace(callback) {
    $.ajax({
        url: "http://localhost:3001/totalDiskSpace",
        method: "GET",
        success: function (data) {
            callback(null , data.toString());
        },
        error: function (xhr, status, error) {
            callback(`Error: ${status} - ${error}`);
        }
    });
}

export function formatBytes(bytes, decimals = 2) {
  if (!+bytes) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}