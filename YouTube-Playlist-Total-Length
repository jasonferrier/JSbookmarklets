// Minified JS bookmarklet code created with http://mrcoles.com/bookmarklet/
javascript:(function()%7Bvar%20sumMin%20%3D%200%2C%20sumSec%20%3D%200%2C%20timestamps%20%3D%20document.querySelectorAll('.timestamp%20span')%3Bfor%20(let%20i%3D0%3B%20i%20%3C%20timestamps.length%3B%20i%2B%2B)%20%7BsumMin%20%2B%3D%20parseInt(timestamps%5Bi%5D.innerText.split(%22%3A%22)%5B0%5D)%3BsumSec%20%2B%3D%20parseInt(timestamps%5Bi%5D.innerText.split(%22%3A%22)%5B1%5D)%3B%7Dif%20(sumSec%20%3E%3D%2060)%20%7BsumMin%20%2B%3D%20Math.floor(sumSec%20%2F%2060)%3BsumSec%20%3D%20sumSec%20%25%2060%3B%7Dalert(%22Total%20time%20of%20playlist%3A%20%22%20%2B%20sumMin%20%2B%20%22%3A%22%20%2B%20sumSec)%7D)()

/* SOURCE WITH CONSOLE DEBUG LINES
var sumMin = 0, sumSec = 0, timestamps = document.querySelectorAll('.timestamp span');

for (let i=0; i < timestamps.length; i++) {
    let min = 0, sec = 0, time;

    // create temp time string
    time = timestamps[i].innerText;

    // (object) timestamps[0] = <span aria-label="100 seconds">1:40</span>
    min = parseInt(time.split(":")[0])
    //console.log("min: " + min);
    sumMin += min;

    sec = parseInt(time.split(":")[1])
    //console.log("sec: " + sec);
    sumSec += sec;
}

if (sumSec >= 60) {
	// Add minutes
	sumMin += Math.floor(sumSec / 60);

	// Calculate remainder of sec
	sumSec = sumSec % 60;
}

//console.info("Total time of playlist: " + sumMin + ":" + sumSec);
alert("Total time of playlist: " + sumMin + ":" + sumSec);
*/
