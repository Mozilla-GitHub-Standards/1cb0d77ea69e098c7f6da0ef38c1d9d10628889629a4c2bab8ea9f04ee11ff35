// Batch download apps to a device.
var fs = require('fs');
var urls = JSON.parse(fs.readFileSync('appsURLs.json'));

var currentURLIndex = null;
var sys = require('sys');
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }

downloadNext();

function downloadNext(error, stdout, stderr) {
    if (stdout) {
        console.log(stdout);
    }

    if (currentURLIndex === null) {
        currentURLIndex = 0;
    } else {
        currentURLIndex++;
    }

    if (currentURLIndex < urls.length) {
        exec('casperjs download.js --url=' + urls[currentURLIndex], downloadNext);
    }
}
