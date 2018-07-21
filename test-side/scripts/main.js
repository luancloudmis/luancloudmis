var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/surprise.jpg') {
      myImage.setAttribute ('src','images/surprises.jpg');
    } else {
      myImage.setAttribute ('src','images/surprise.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUsername()
{
	var myName = prompt('Please enter your name !');
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Say something, '+myName;
}
if(!localStorage.getItem('name'))
{
	setUsername();
}
else
{
	var storedName = localStorage.getItem('name');
	myHeading.textContent= 'Say something, '+ storedName;
}
myButton.onclick = function()
{
	setUsername();
}
