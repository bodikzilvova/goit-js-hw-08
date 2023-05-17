import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    const startPlayer = localStorage.getItem("videoplayer-current-time");
   

    player.on('play', function(timeupdate) {
        localStorage.setItem("videoplayer-current-time", timeupdate.seconds); 
    });


    if (startPlayer !== null && startPlayer !== undefined){
        player.setCurrentTime(startPlayer).then(function(seconds) {
            
        }).catch(function(error) {
            switch (error.name) {
                case 'RangeError':
                    break;
                default:
                    break;
            }
        });
        }
         








  
   