var buttons = document.querySelector("#buttons");
const button1 = document.getElementById("drama")
const button2 = document.getElementById("comedy")
const button3 = document.getElementById("horror")
var buttonSelected = document.getElementsByClassName(".button")

button1.addEventListener('click', function(event){   
    window.open(
        "2nd.html", "_blank"
    );
    if(localStorage.getItem('genre') != null){
        localStorage.clear();
    }
    else{
        localStorage.setItem('genre', this.id);
    }  
})
button2.addEventListener('click', function(event){
    window.open(
        "2nd.html", "_blank"
    );
    if(localStorage.getItem('genre') != null){
        localStorage.clear();
    }
    else{
        localStorage.setItem('genre', this.id);
    }  
})
button3.addEventListener('click', function(event){
    window.open(
        "2nd.html", "_blank"
    );
    if(localStorage.getItem('genre') != null){
        localStorage.clear();
    }
    else{
        localStorage.setItem('genre', this.id);
    }  
    // window.open(
    //     "2nd.html", "_blank"
    // );
})

var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'cWheu4NAzlQ',
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
      function onPlayerReady(event) {
        event.target.playVideo();
      }
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
      var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'cWheu4NAzlQ',
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
// const onClick = function() {
//     if(localStorage.getItem('genre') != null){
//         localStorage.removeItem();
//     }
//     else{
//         localStorage.setItem('genre', this.id);
//     }
    // sessionStorage.setItem('genre', this.id);
    // console.log(localStorage);
    //if theres data in storage already, clear and then add

//   document.getElementById("comedy").onclick = onClick;
//   document.getElementById("drama").onclick = onClick;
//   document.getElementById("horror").onclick = onClick;