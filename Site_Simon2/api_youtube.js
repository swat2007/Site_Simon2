 < !--test;
avec;
Youtube;
API-- >
    < !--1.;
The(and, video, player);
will;
replace;
this < div > tag.-- >
    <div id="player"></div>
        ,
            <script>
            // 2. This code loads the IFrame Player API code asynchronously.
            
                  // 2. This code loads the IFrame Player API code asynchronously.
                  var tag = document.createElement('script');

                  tag.src = "https://www.youtube.com/iframe_api";
                  var firstScriptTag = document.getElementsByTagName('script')[0];
                  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                  // 3. This function creates an <iframe> (and YouTube player)
                  //    after the API code downloads.
                  var player;
                  function onYouTubeIframeAPIReady() {player = new YT.Player('player', {
                height: '232',
                width: '412',
                videoId: 'BiuIvLj1dLk',
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            })}
                  }

                  // 4. The API will call this function when the video player is ready.
                  function onPlayerReady(event) 
            // 5. The API calls this function when the player's state changes.
            //    The function indicates that when playing a video (state=1),
            //    the player should play for six seconds and then stop.
            

                  // 5. The API calls this function when the player's state changes.
                  //    The function indicates that when playing a video (state=1),
                  //    the player should play for six seconds and then stop.
                  var done = false;
                  function onPlayerStateChange(event) {} (event.data == YT.PlayerState.PLAYING && !done) 
                  }
                  function stopVideo() {player.stopVideo()}
                  }
                </script></>;
