/*
 * Image is a global object that allows us to 
 * quickly create an "img" element.
*/
var photo = new Image(300, 300);

// Get references to DOM elements
var div = document.getElementById('image-container');

var button = document.getElementById('image-button');

var hiddenMessage = document.getElementById('image-hidden-message');

var catPictures = ['http://i.imgur.com/BgTZ2X1.jpg', 
                   'http://i.imgur.com/HfK2alA.jpg', 
                   'http://i.imgur.com/ILypKxi.gif',
                   'http://i.imgur.com/QwoYCfl.gif'] 

// Assign the image a source for the image and attaches it to the document
photo.src = catPictures[0];
div.appendChild(photo);



/*
 * Define a function that slides through the different cat photos
 * after each function call - note that currentIndex is a global
 * variable.
 */
var currentIndex = 0;

function switchPhoto() {    
    currentIndex += 1;

    if(currentIndex >= catPictures.length) {
        currentIndex = 0;
    } 

    photo.src = catPictures[currentIndex];
}

/*
 * This small statement is extremely powerful.
 *
 * We register an asynchronous callback that will get
 * called when a certain event happens.
 *
 * This slightly differs from normal functions which take
 * another function - an asynchronous callback doesn't get called
 * immediately.
 *
 * For this example, we say that whenever the user clicks the photo
 * element, we call our switchPhoto function.
 */

photo.addEventListener('click', switchPhoto);


/*
 * Defines a function which toggles between showing and hiding
 * the photo element.
 */
var showPhoto = true;

function hideShowPhotoToggle() {
    // small little trick, if showPhoto was true, it becomes false and vice-versa
    showPhoto = !showPhoto;


    /*
     * If we want to show a photo, we give it an empty display style value.
     * Otherwise if we want to hide it, we give it a display style value of 'none'.
     *
     * Same idea for the text that only shows itself when the photo is hidden, we
     * when we want to show the hiddenText, we give it the display style 'block',
     * otherwise if we want to hide the hiddenText, we get it the display style 'none'.
     */
    if(showPhoto) {
        photo.style.display = '';
        hiddenMessage.style.display = 'none';
        button.innerHTML = 'Hide Cats';
    } else {
        photo.style.display = 'none';
        hiddenMessage.style.display = 'block';
        button.innerHTML = 'Show Cats';
    }
}


/*
 * Whenever the user clicks the button on the page, we call our function
 * that toggles between showing/hiding the 
 */
button.addEventListener('click', hideShowPhotoToggle);
