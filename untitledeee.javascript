<html>
<head>
</head>

<body>
<img src="http://www.zooportraits.com/wp-content/uploads/2014/11/03-695-post/Grizzly-Bear-Ursus-Arctos-copia.jpg" alt="rotating image" width="600" height="500" id="rotator">

<script type="text/javascript">
(function() {
var rotator = document.getElementById('rotator');  // change to match image ID
//var imageDir = 'images/';                          // change to match images folder
var delayInSeconds = 1;                            // set number of seconds delay
// list image names
var images = ['1.jpg','2.jpg', '3.jpg', '4.jpg'];

// don't change below this line
var num = 0;
var changeImage = function() {
    var len = images.length;
    rotator.src = images[num++];
    if (num == len) {
        num = 0;
    }
};
setInterval(changeImage, delayInSeconds * 50);
})();
</script>
</body>
</html>