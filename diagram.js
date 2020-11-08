// results got with readdata.js and from dict files in this folder
var result10k = [26, 394, 664, 1100, 1367, 1491, 1449, 1157, 904, 608, 374, 207, 101, 52]; // 10k most popular
//var result100k = [26, 93, 936, 3530, 6371, 10290, 12761, 14822, 14766, 12831, 9680, 6874, 4333, 4904];
// 100k dict https://github.com/adambom/dictionary
var result20k = [26, 570, 1491, 2016, 2570, 2930, 2943, 2491, 1957, 1362, 809, 459, 237, 139]; // 20k most popular

var ctx = document.getElementById('myChart').getContext('2d');
var myLineChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ['1 letter', '2 letters', '3 letters', '4 letters', '5 letters', '6 letters', '7 letters', '8 letters',
		'9 letters', '10 letters', '11 letters', '12 letters', '13 letters', '13+ letters',],
		datasets: [{
			label: '10k most popular words',
			backgroundColor: "red",
			borderColor: "red",
			data: result10k,
			fill: false
		},
		{
			label: '20k most popular words',
			backgroundColor: "green",
			borderColor: "green",
			data: result20k,
			fill: false
		},
		{
			label: '20k most popular words normalized (num/10)',
			backgroundColor: "blue",
			borderColor: "blue",
			data: [
				result20k[0]/2,
				result20k[1]/2,
				result20k[2]/2,
				result20k[3]/2,
				result20k[4]/2,
				result20k[5]/2,
				result20k[6]/2,
				result20k[7]/2,
				result20k[8]/2,
				result20k[9]/2,
				result20k[10]/2,
				result20k[11]/2,
				result20k[12]/2,
				result20k[13]/2,
			],
			fill: false
		}],
	},
});