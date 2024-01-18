import $ from "jquery";

export function servicesConfigLoader(callback) {
    $.ajax({
        url: "http://localhost:3001/servicesConfig",
        method: "GET",
        success: function (data) {
            callback(null, data);
        },
        error: function (xhr, status, error) {
            console.log(`Error: ${status} - ${error}`);
        }
    });
}