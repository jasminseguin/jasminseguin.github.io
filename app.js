let viewport = document.getElementsByClassName('viewport')[0]
let video = document.getElementById('videoTiktok')

viewport.addEventListener('mouseover', function() { 
    video.play() 
}, false);

viewport.addEventListener('mouseout', function() { 
    video.pause() 
}, false);
