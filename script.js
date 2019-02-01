// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {

	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("scrollToTop").style.display = "block";
    } else {
        document.getElementById("scrollToTop").style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function skipFocused(){
	document.getElementById('skipmenu').style.height = "100%";
}

function skipUnfocused(){
	document.getElementById('skipmenu').style.height = 0;
}

function scrollToElement(id){
	document.getElementById(id).scrollIntoView();
}

function scrollToImage(){
	var query = window.location.search.substring(1);

		var res = parse_query_string(query);
		if("lNumI" in res){
			var num = parseInt(res["lNumI"]);
			if(num !== "" && num !== null && num !== 0){
				scrollToElement('f'+num);
			}
		}
	
}

window.onresize =function(event) {
   magnify();
};
function magnify() {
	var imgID='myimage';
    var zoom=3;
  if (navigator.userAgent.match(/iPad|Android|webOS|iPhone|iPod|Blackberry/i))
    return;

  var img, glass, w, h, bw, block = 0;
  img = document.getElementById(imgID);
  if(img !=null  && img !== undefined){
	  glass = document.getElementById('glass');
	  imgposX = img.style.offsetLeft;
	  imgposY = img.style.offsetTop;

	  glass.style.backgroundImage = "url('" + img.src + "')";
	  glass.style.backgroundRepeat = "no-repeat";
	  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
	  bw = 3;
	  w = glass.offsetWidth / 2;
	  h = glass.offsetHeight / 2;

	  glass.addEventListener("mousemove", moveMagnifier);
	  img.addEventListener("mousemove", moveMagnifier);

	  function moveMagnifier(e) {
		var pos, x, y;

		/*prevent any other actions that may occur when moving over the image*/
		e.preventDefault();

		pos = getCursorPos(e);
		x = pos.x;
		y = pos.y;


		if ((x > img.width - (w / zoom)) || (x < w / zoom) || (y > img.height - (h / zoom)) || (y < h / zoom)) {
	   glass.style.visibility = 'hidden';
		}
		else
		{
		  if(glass.style.visibility == 'hidden') { glass.style.visibility = 'visible'; }
		  e = e || window.event;
		  glass.style.left = e.pageX - w + "px";
		  glass.style.top = e.pageY - h + "px";

		  glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
		}
	  }

	  function getCursorPos(e) {
		 var a, x = 0, y = 0;
		e = e || window.event;
		/*get the x and y positions of the image:*/
		a = img.getBoundingClientRect();
		imageContainer = document.getElementById("imageContainer").getBoundingClientRect();
		/*calculate the cursor's x and y coordinates, relative to the image:*/
		x = e.pageX - a.left;
		y = e.pageY - a.top;
		/*consider any page scrolling:*/
		x = x - window.pageXOffset;
		y = y - window.pageYOffset;
		return {x : x, y : y};
	  }
  }
}
