const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');



const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
// user Input function (str)
function search(str) {
	let results = [];

	// If the input string length is greater than 0, filter the fruit array
	if (str.length > 0) {
		results = fruit.filter(item => item.toLowerCase().includes(str.toLowerCase()));   // using the .filter method to iterate through the fruit array. returning a new array  changing the user input to lowercase and the fruit item to lowercase and using the includes Method to check if the fruit name contains the input string
	}

	return results;
}


// Event handler for keyup event on input field
function searchHandler(e) {
    const inputVal = e.target.value;  // Get the current value of the input field
    const results = search(inputVal);  // Get matching results from the search function
    showSuggestions(results, inputVal);  // Display the suggestions
}
	

// Function to Display suggestions
function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';                         //clears any existing suggestions

	//checks if there are items in the results argument
	if (results.length > 0) {   
		results.forEach(item => {                       //Iterates over each item in the results array
			const li = document.createElement('li');    //creates new list element
			li.textContent = item;                      //Sets the content of the list item to the current item

			li.addEventListener('mouseover', () => {    //mouseover Adds highlight class over  the suggestion. styled in css
				li.classList.add('highlight');
			});
			
			li.addEventListener('mouseout', () => {     //adds mouseout eventlistener to remove highlight from the suggestion
				li.classList.remove('highlight');
			})
			
			suggestions.appendChild(li);   //Appends the list item to the suggestions constainer
		});
		}
	}
	

// if the suggestion was clicked
function useSuggestion(e) {
	if (e.target.tagName === 'LI') {  //Check if the clicked element is a li
		input.value = e.target.textContent;  // Set the input field value to the clicked suggestion
		suggestions.innerHTML = '';   // Clear suggestion list after the click
	}
	
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);