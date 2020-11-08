var fs = require("fs");
var result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var jsonoriginal = JSON.parse(fs.readFileSync("dicts/10krus.json"));
var keys = jsonoriginal.words;
for (let i = 0; i < keys.length; i++) {
	if (keys[i].length > 13) {
		result[13]++;
	} else {
		result[(keys[i].length-1)]++;
	}
}
for (let i = 0; i < result.length; i++) {
	console.log(result[i] + ",");
}