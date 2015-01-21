/*
 * You can add your own HTML elements to the page
 * through JavaScript!
 *
 * This is many reasons JavaScript is used. 
 *
 * We can create new HTML elements through an API
 * to something called the DOM. The DOM is the
 * Document Object Model, which is a tree that 
 * represents the elements in the page. We need
 * something like the DOM to programmatically 
 * change the page and makes it easier to do dynamic actions.
 *
 */

/* 
 * we are creating a new element using the API
 * provided by the global document object.
*/
var text = document.createElement('p');
text.innerHTML = "Hello from JavaScript";

/*
 * We find an element that currently exists in the document,
 * and we find it by its unique id. 
 */
var div = document.getElementById('text-container');

/*
 * We then add a child to the div, embedding it within
 * the innerHTML of the div
 */
div.appendChild(text);

var text2 = document.createElement('p');

// We insert an element before the text we inserted before
div.insertBefore(text2, text);
