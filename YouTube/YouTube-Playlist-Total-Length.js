// Minified JS bookmarklet code created with http://mrcoles.com/bookmarklet/
javascript:(function()%7Bvar%20totalNumberOfMinutes%20%3D%200%2C%20totalNumberOfSeconds%20%3D%200%2C%20timestamps%20%3D%20document.querySelectorAll('.timestamp%20span')%3Bfor%20(let%20i%3D0%3B%20i%20%3C%20timestamps.length%3B%20i%2B%2B)%20%7BtotalNumberOfMinutes%20%2B%3D%20parseInt(timestamps%5Bi%5D.innerText.split(%22%3A%22)%5B0%5D)%3BtotalNumberOfSeconds%20%2B%3D%20parseInt(timestamps%5Bi%5D.innerText.split(%22%3A%22)%5B1%5D)%3B%7Dif%20(totalNumberOfSeconds%20%3E%3D%2060)%20%7BtotalNumberOfMinutes%20%2B%3D%20Math.floor(totalNumberOfSeconds%20%2F%2060)%3BtotalNumberOfSeconds%20%3D%20totalNumberOfSeconds%20%25%2060%3B%7Dalert(%22Total%20time%20of%20playlist%3A%20%22%20%2B%20totalNumberOfMinutes%20%2B%20%22%3A%22%20%2B%20totalNumberOfSeconds)%7D)()

// ----------------------------
// Source code with debug lines
var totalNumberOfMinutes = 0, totalNumberOfSeconds = 0, timestamps = document.querySelectorAll('.timestamp span');

for (let i=0; i < timestamps.length; i++) {
    let videoDurationMinutes = 0, videoDurationSeconds = 0, videoTimestamp;

    // (object) timestamps[0] = <span aria-label="100 seconds">1:40</span>
    videoTimestamp = timestamps[i].innerText;
    
    videoDurationMinutes = parseInt(videoTimestamp.split(":")[0])
    console.log("Video duration minutes portion: " + videoDurationMinutes);
    totalNumberOfMinutes += videoDurationMinutes;

    videoDurationSeconds = parseInt(videoTimestamp.split(":")[1])
    console.log("Video duration seconds portion: " + videoDurationSeconds);
    totalNumberOfSeconds += videoDurationSeconds;
}

if (totalNumberOfSeconds >= 60) {
	totalNumberOfMinutes += Math.floor(totalNumberOfSeconds / 60);
	totalNumberOfSeconds = totalNumberOfSeconds % 60;
}

console.info("Total time of playlist: " + totalNumberOfMinutes + ":" + totalNumberOfSeconds);
alert("Total time of playlist: " + totalNumberOfMinutes + ":" + totalNumberOfSeconds);
