var text = document.createElement('p');
text.innerHTML = "Hello from JavaScript";

var div = document.getElementById('text-container');
div.appendChild(text);

var text2 = document.createElement('p');
div.insertBefore(text2, text);
