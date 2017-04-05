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

	square: function (arr) {
		var newArray = []
		for (var number of arr) {
			newArray.push(number * number)
		}		
		return newArray
	},

	sum: function (arr) {
		var total = 0
		for (var number of arr) {
			total = total + number
		}		
		return total		
	},

	findDuplicates: function (arr) {
		var duplicatesArray = []
		for (var i = 0; i < arr.length; i++) {
			var currentElement = arr[i]
			if (currentElement === arr[i+1]) {
				duplicatesArray.push(currentElement)
			}
		}
		return duplicatesArray
	},

	removeAndClone: function (arr, valueToRemove) {
		var newArray = []
		arr.forEach(function(element) {
			if (element != valueToRemove) {
				newArray.push(element)	
			}
		})
		return newArray
	},

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
