var fs = require("fs");

// Asynchronous read
fs.readFile('3-read-from-file.md', function (err, data) {
if (err) {
	return console.error(err);
}
console.log("Asynchronous read: " + data.toString());
});
