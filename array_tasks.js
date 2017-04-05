var arrayTasks = {

	concat: function (arr1, arr2) {
		var newArray = []
		newArray.push.apply(newArray, arr1)
		newArray.push.apply(newArray, arr2)
		return newArray
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd)
		return arr
	},

	// square: function (arr) {
		
	// },

	// sum: function (arr) {
		
	// },

	// findDuplicates: function (arr) {
		
	// },

	// removeAndClone: function (arr, valueToRemove) {
		
	// },

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
