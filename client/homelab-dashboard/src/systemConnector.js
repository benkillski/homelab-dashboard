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

export function getTotalDiskSpace() {
    return $.get('http://localhost:3001/totalDiskSpace', {}, function (responseText) {
        return responseText;
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