const essentialsItems = ['Milk', 'Eggs', 'Bread', 'Butter', 'Salt', 'Pepper', 'Sugar', 'Flour', 'Rice', 'Pasta'];
const beveragesItems = ['Coffee', 'Tea', 'Juice', 'Soda', 'Water', 'Wine', 'Beer', 'Energy Drinks', 'Smoothies', 'Milkshakes'];

const frozenItems = ['Frozen Vegetables', 'Frozen Fruits', 'Frozen Pizza', 'Frozen Meals', 'Ice Cream', 'Frozen Fish', 'Frozen Chicken', 'Frozen Desserts', 'Frozen Appetizers', 'Frozen Breakfast Foods'];
const personalNotesItems = ['Buy birthday cake', 'Check for discounts', 'Remember to pick up dry cleaning', 'Check expiration dates', 'Pick up prescription'];

//This line defines a function named displayList that takes two parameters: listId, which represents the ID of the HTML element where the list will be displayed, and items, which is an array containing the items to be displayed in the list.
function displayList(listId, items) {

//This line selects the HTML element with the ID specified by the listId parameter using the document.getElementById method. It assigns this element to the constant variable list, which will be used to append the list items.
  const list = document.getElementById(listId);
  list.innerHTML = ''; // Clear previous content


// This line begins a loop over each item in the items array using the forEach method. It takes a callback function as an argument, which will be executed for each item in the array.
  items.forEach(item => {
    const listItem = document.createElement('li');

// This line creates a new input element (<input>) using the document.createElement method and assigns it to the constant variable checkbox. This input element will be used as a checkbox for each list item.
    const checkbox = document.createElement('input');

//This line sets the type attribute of the checkbox input element to 'checkbox', specifying that it should be rendered as a checkbox.
    checkbox.type = 'checkbox';
    listItem.appendChild(checkbox);

//This line creates a new text node containing the text of the current item (item) using the document.createTextNode method. It then appends this text node as a child of the listItem list item element. This adds the text content of the item after the checkbox in each list item.
    listItem.appendChild(document.createTextNode(item));
    list.appendChild(listItem);
  });
}

function displayEssentials() {
  displayList('essentials-list', essentialsItems);
}

function displayBeverages() {
  displayList('Beverages-list', beveragesItems);
}

function displayFrozen() {
  displayList('Frozen-list', frozenItems);
}

function displayPersonalNotes() {
  displayList('personal-notes-list', personalNotesItems);
}
