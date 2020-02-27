var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');


for (var i = 1; i <=5; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = function thumb(t) {
    var imgSrc = t.target.getAttribute('src');
    displayedImage.setAttribute('src', imgSrc);
  }
}
