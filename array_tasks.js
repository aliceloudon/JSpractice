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
		arr.slice().sort()
		for (var i = 0; i < arr.length; i++) {
			var currentElement = arr[i]
			if (currentElement === arr[i+1]) {
				duplicatesArray.push(currentElement)
			}
			// This works but returns [4, 5, 5]. I want [4, 5]
		}
		duplicatesArray.slice().sort()
		for (var i = 0; i < duplicatesArray.length; i++) {
			if (duplicatesArray[i] === duplicatesArray[i+1]) {
				duplicatesArray.splice(duplicatesArray.indexOf([i+1]), 1)
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

	findIndexesOf: function (arr, itemToFind) {
		var newArray = []

		arr.forEach(function (element) {
			if (element === itemToFind) {
				var position = arr.indexOf(element) 
				newArray.push(position)
			}
		})
		return newArray
	},

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
