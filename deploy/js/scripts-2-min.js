var imgArray=new Array(4),slideIndex=0,cyclingIndex=0,randomIndex=0,tigerArray=["img/tigers/tiger-1.jpg","img/tigers/tiger-2.jpg","img/tigers/tiger-2.jpg","img/tigers/tiger-4.jpg"];function cycle(){cyclingIndex>3&&(cyclingIndex=0,document.getElementById("cyclingBanner").src=tigerArray[cyclingIndex],cyclingIndex++),setTimeout("cycle()",2e3)}function random(){setTimeout("random()",2e3)}function doBack(){slideIndex<=0?slideIndex=3:slideIndex--,document.getElementById("slideShow").src=imgArray[slideIndex]}function doNext(){slideIndex>=3?slideIndex=0:slideIndex++,document.getElementById("slideShow").src=imgArray[slideIndex]}function startup(){cycle()}