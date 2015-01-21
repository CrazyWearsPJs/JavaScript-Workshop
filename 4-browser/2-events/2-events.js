var photo = new Image(300, 300);

var div = document.getElementById('image-container');

var button = document.getElementById('image-button');

var hiddenMessage = document.getElementById('image-hidden-message');

var catPictures = ['http://i.imgur.com/BgTZ2X1.jpg', 
                   'http://i.imgur.com/HfK2alA.jpg', 
                   'http://i.imgur.com/ILypKxi.gif',
                   'http://i.imgur.com/QwoYCfl.gif'] 

photo.src = catPictures[0];
div.appendChild(photo);


var currentIndex = 0;

function switchPhoto() {    
    currentIndex += 1;

    if(currentIndex >= catPictures.length) {
        currentIndex = 0;
    } 

    photo.src = catPictures[currentIndex];
}

photo.addEventListener('click', switchPhoto);


var showPhoto = true;

function hideShowPhotoToggle() {
    showPhoto = !showPhoto;
    if(showPhoto) {
        photo.style.display = '';
        hiddenMessage.style.display = 'none';
    } else {
        photo.style.display = 'none';
        hiddenMessage.style.display = 'block';
    }
}


button.addEventListener('click', hideShowPhotoToggle);