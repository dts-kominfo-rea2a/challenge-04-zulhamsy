// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate
function sortAndStringfy(list) {
	const initial = list
	const result = []
	initial.sort((a, b) => a - b)
	for (let i = 0; i < initial.length; i++) {
		result.push(initial[i].toString())
	}
	
	return result.join('-')
}

const createDate = function(dates, index) {
	// execute
	const result = []
	const sortResult = []
	for (let i = 0; i < dates.length; i++) {
		result.push(Date.parse(dates[i]) ? Date.parse(dates[i]) / 1000 : 'Invalid date format')
	}
	// output
	if (index < dates.length && index > -1) {
		return result[index].toString()
	} else {
		return sortAndStringfy(result)
	}
}

// ! JANGAN DIMODIFIKASI
(() => {
	// IIFE

	// '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
	console.log(createDate?.(dates));

	// '1614841200' (dalam string)
	console.log(createDate?.(dates, 2));
})();

module.exports = {
	dates,
	createDate,
};
